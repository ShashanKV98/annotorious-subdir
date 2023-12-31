<script type="ts" lang="ts">
  import type { DrawingStyle } from '@annotorious/core';
  import type { Geometry, ImageAnnotation, FreehandGeometry } from '../../model';
  import { computeStyle } from '../utils/styling';
  import { getSmoothPathData, options } from '../utils/path';
  
  /** Props **/
  export let annotation: ImageAnnotation;
  export let geom: Geometry;
  export let style: DrawingStyle | ((annotation: ImageAnnotation) => DrawingStyle) = undefined;

  let staticProps = {
    fillOpacity: 1
  }
  $: computedStyle = computeStyle(annotation, style,staticProps);

  const { points } = geom as FreehandGeometry;
  $: pathData = getSmoothPathData(points,options)
  
</script>

<g data-id={annotation.id}>
  <path 
    class="a9s-outer"
    style={computedStyle}
    d={pathData} />
</g>
