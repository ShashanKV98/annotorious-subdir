<script type="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import type { DrawingMode } from '../../../AnnotoriousOpts';
  import { boundsFromPoints, computeArea, ShapeType, type Freehand } from '../../../model';
  import { distance } from '../../utils';
  import { getSmoothPathData, options } from '../../utils/path';
  import type { Transform } from '../..';

  const dispatch = createEventDispatcher<{ create: Freehand }>();

  /** Props **/
  export let addEventListener: (type: string, fn: EventListener, capture?: boolean) => void;
  export let drawingMode: DrawingMode;
  export let transform: Transform;
  export let viewportScale = 1;

  let lastPointerDown: { timeStamp: number, offsetX: number, offsetY: number };

  $: points = [];
  
  let cursor: [number, number] = null;

  // let isDrawing: Boolean = false;

  $: handleSize = 10 / viewportScale;

  const onPointerDown = (evt: PointerEvent) => {
    // Note that the event itself is ephemeral!
    const { timeStamp, offsetX, offsetY } = evt;
    lastPointerDown = { timeStamp, offsetX, offsetY };

    if (drawingMode === 'drag') {
      // isDrawing = true
      if (points.length === 0) {
        const point = transform.elementToImage(evt.offsetX, evt.offsetY);
        points = [...point,evt.pressure];
        
        cursor = point;
        // pathData = getSmoothPathData(points,options)
      }
    }
  }

  const onPointerMove = (evt: PointerEvent) => {
    // if (isDrawing){
      const point = transform.elementToImage(evt.offsetX, evt.offsetY);
      points = [...points, [...point,evt.pressure]];
      // pathData = getSmoothPathData(points,options)
    // }
  }

  const onPointerUp = (evt: PointerEvent) => {
      // Stop click event from propagating if we're drawing
      // evt.stopImmediatePropagation();
      // isDrawing = false
      stopDrawing();
  }

  const stopDrawing = () => {
    const shape: Freehand = {
      type: ShapeType.FREEHAND, 
      geometry: {
        bounds: boundsFromPoints(points.map(point => [point[0],point[1]])),
        points: points
      }
    }

    points = [];
    cursor = null;
  
    dispatch('create', shape);
  }

  $: pathData = getSmoothPathData(points,options)
  

  onMount(() => {
    addEventListener('pointerdown', onPointerDown, true);
    addEventListener('pointermove', onPointerMove);
    addEventListener('pointerup', onPointerUp, true);
  });
</script>

<g class="a9s-annotation a9s-rubberband">
  {#if cursor}
    <!-- {#if points.length > 0} -->
        <path 
          class="a9s-inner"
          d={pathData} />
    <!-- {/if} -->
  {/if}
</g>
