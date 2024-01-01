<script type="ts" lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import type { DrawingMode } from '../../../AnnotoriousOpts';
  import type { DrawingStyle } from '@annotorious/core';
  import { boundsFromPoints, computeArea, ShapeType, type Freehand, type ImageAnnotation } from '../../../model';
  import { distance } from '../../utils';
  import { getSmoothPathData, options } from '../../utils/path';
  import { computeStyle } from '../../utils/styling'; 
  import type { Transform } from '../..';

  const dispatch = createEventDispatcher<{ create: Freehand }>();

  /** Props **/
  export let addEventListener: (type: string, fn: EventListener, capture?: boolean) => void;
  export let drawingMode: DrawingMode;
  export let annotation: ImageAnnotation;
  export let transform: Transform;
  export let viewportScale = 1;
  export let style: DrawingStyle | ((annotation: ImageAnnotation) => DrawingStyle) = undefined;
  let staticProps = {
    fillOpacity: 1
  }

  let lastPointerDown: { timeStamp: number, offsetX: number, offsetY: number };

  let points : [number, number, number][] = [];
  
  let pathData: string = ''

  let cursor: [number, number] = null;

  let isDrawing: Boolean = false;

  $: handleSize = 10 / viewportScale;

  $: computedStyle = computeStyle(annotation, style,staticProps);

  const onPointerDown = (evt: PointerEvent) => {
    // Note that the event itself is ephemeral!
    const { timeStamp, offsetX, offsetY } = evt;
    lastPointerDown = { timeStamp, offsetX, offsetY };

    if (drawingMode === 'drag') {
      
      if (points.length === 0) {
        isDrawing = true
        const point = transform.elementToImage(evt.offsetX, evt.offsetY);
        points.push([...point,evt.pressure]);
        
        cursor = point;
        pathData = getSmoothPathData(points,options)
      }
    }
  }

  const onPointerMove = (evt: PointerEvent) => {
    if (isDrawing){
      const point = transform.elementToImage(evt.offsetX, evt.offsetY);
      points.push([...point,evt.pressure])
      pathData = getSmoothPathData(points,options)
    }
  }

  const onPointerUp = (evt: PointerEvent) => {
      // Stop click event from propagating if we're drawing
      // evt.stopImmediatePropagation();
      if (isDrawing){
      // pathData = getSmoothPathData(points,options)
        stopDrawing();
      }
  }

  const stopDrawing = () => {
    const shape: Freehand = {
      type: ShapeType.FREEHAND, 
      geometry: {
        bounds: boundsFromPoints(points.map(point => [point[0],point[1]])),
        points: points
      }
    }
    isDrawing = false
    points = [];
    // pathData = null
    cursor = null;
  
    dispatch('create', shape);
  }

  //  $: pathData = getSmoothPathData(points,options)
  

  onMount(() => {
    addEventListener('pointerdown', onPointerDown, true);
    addEventListener('pointermove', onPointerMove);
    addEventListener('pointerup', onPointerUp, true);
  });
</script>

<g class="a9s-annotation a9s-rubberband">
  {#if isDrawing}
    <!-- {#if points.length > 0} -->
        <path 
          style={computedStyle}
          d={pathData} />
    <!-- {/if} -->
  {/if}
</g>
