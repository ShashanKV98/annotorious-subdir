<script type="ts" lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import type { DrawingMode } from '../../../AnnotoriousOpts';
  import { ShapeType, type Line } from '../../../model';
  import type { Transform } from '../..';

  const dispatch = createEventDispatcher<{ create: Line }>();
  
  /** Props **/
  export let addEventListener: (type: string, fn: EventListener, capture?: boolean) => void;
  export let drawingMode: DrawingMode;
  export let transform: Transform;

  let lastPointerDown: number;

  let origin: [x: number, y: number]; 

  let anchor: [number, number];

  let x1: number, y1: number, x2: number, y2: number;

  const onPointerDown = (evt: PointerEvent) => {
    lastPointerDown = performance.now();

    if (drawingMode === 'drag') {
      origin = transform.elementToImage(evt.offsetX, evt.offsetY);
      anchor = origin;

      x1 = origin[0];
      y1 = origin[1];
      x2 = origin[0] + 1; 
      y2 = origin[1] + 1; 
    }
  }

  const onPointerMove = (evt: PointerEvent) => {
    if (origin) {
      anchor = transform.elementToImage(evt.offsetX, evt.offsetY);

      x1 = Math.min(anchor[0], origin[0]);
      y1 = Math.min(anchor[1], origin[1]);
      x2= Math.max(anchor[0], origin[0]);
      y2 = Math.max(anchor[1], origin[1]);
    }
  }
    
  const onPointerUp = (evt: PointerEvent) => {
    const timeDifference = performance.now() - lastPointerDown;

    if (drawingMode === 'click') {
      // Not a single click - ignore
      if (timeDifference > 300)
        return;

      evt.stopPropagation();

      if (origin) {
        stopDrawing();
      } else {
        // Start drawing
        origin = transform.elementToImage(evt.offsetX, evt.offsetY);
        anchor = origin;

        x1 = origin[0];
        y1 = origin[1];
        x2 = origin[0] + 1; 
        y2 = origin[1] + 1; 
      }
    } else if (origin) {
      if (timeDifference > 300 || Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2)) > 8) {
        evt.stopPropagation();
        stopDrawing();
      } else {
        origin = null;
        anchor = null;
      }
    }
  }

  const stopDrawing = () => {
    // Require 4x4 pixels minimum
    if (Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2)) > 8) {
      const shape: Line = {
        type: ShapeType.LINE, 
        geometry: {
          bounds: {
            minX: Math.min(x1,x2), 
            minY: Math.min(y1,y2), 
            maxX: Math.max(x1,x2), 
            maxY: Math.max(y1,y2), 
          },
          x1, y1, x2, y2
        }
      }

      dispatch('create', shape);
    }
    
    origin = null;
    anchor = null;
  }

  onMount(() => {
    addEventListener('pointerdown', onPointerDown);
    addEventListener('pointermove', onPointerMove);
    addEventListener('pointerup', onPointerUp, true);
  });
</script>

<g class="a9s-annotation a9s-rubberband">
  {#if origin}
    <line
      class="a9s-outer"
      x1={x1} 
      y1={y1} 
      x2={x2} 
      y2={y2} />

    <line
      class="a9s-inner"
      x1={x1} 
      y1={y1} 
      x2={x2} 
      y2={y2} />
  {/if}
</g>
