<script type="ts" lang="ts">
  import { boundsFromPoints, type ImageAnnotation } from '../../../model';
  import type { Freehand } from '../../../model';
  import type { Transform } from '../../Transform';
  import type { DrawingStyle } from '@annotorious/core';
  import { Editor, Handle } from '..';
  import { getSmoothPathData, options } from '../../utils/path';
  import { computeStyle } from '../../utils/styling';
  /** Props */
  export let shape: Freehand;
//   export let computedStyle: string = undefined;
  export let annotation: ImageAnnotation;
  export let transform: Transform;
  export let viewportScale: number = 1;
  export let style: DrawingStyle | ((annotation: ImageAnnotation) => DrawingStyle) = undefined;
  let staticProps = {
    fillOpacity: 1
  }
  $: geom = shape.geometry;

  $: handleSize = 10 / viewportScale;

  $: computedStyle = computeStyle(annotation, style,staticProps);

  const editor = (path: Freehand, handle: Handle, delta: [number, number]) => {
    let points: [number, number, number][];

    if (handle === Handle.SHAPE) {
      points = path.geometry.points.map(([x, y, p]) => [x + delta[0], y + delta[1], p]);
    } 

    const bounds = boundsFromPoints(points.map(point => [point[0],point[1]]));

    return {
      ...path,
      geometry: { points, bounds }
    }
  }

  $: pathData = getSmoothPathData(geom.points,options,true)
</script>

<Editor
  shape={shape}
  transform={transform}
  editor={editor}
  on:change 
  on:grab
  on:release
  let:grab={grab}>

  <path
    class="a9s-shape-handle"
    style={computedStyle}
    on:pointerdown={grab(Handle.SHAPE)}
    d={pathData} />
</Editor>
