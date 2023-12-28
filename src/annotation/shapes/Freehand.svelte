<script type="ts" lang="ts">
  import type { DrawingStyle } from '@annotorious/core';
  import type { Geometry, ImageAnnotation, PolygonGeometry } from '../../model';
  import { computeStyle } from '../utils/styling';
  import { getSmoothPathData, options } from '../utils/path';
  
  /** Props **/
  export let annotation: ImageAnnotation;
  export let geom: Geometry;
  export let style: DrawingStyle | ((annotation: ImageAnnotation) => DrawingStyle) = undefined;

  $: computedStyle = computeStyle(annotation, style);

  const { points } = geom as PolygonGeometry;
  
</script>

<g data-id={annotation.id}>
  <path 
    class="a9s-inner"
    style={computedStyle}
    d={getSmoothPathData(points,options)} />
</g>
