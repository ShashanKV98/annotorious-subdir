<script type="ts" lang="ts">
  import type { DrawingStyle } from '@annotorious/core';
  import type { Geometry, ImageAnnotation, FreehandGeometry } from '../../model';
  import { computeStyle } from '../utils/styling';
  
  /** Props **/
  export let annotation: ImageAnnotation;
  export let geom: Geometry;
  export let style: DrawingStyle | ((annotation: ImageAnnotation) => DrawingStyle) = undefined;

  $: computedStyle = computeStyle(annotation, style);

  const { d } = geom as FreehandGeometry;
</script>

<g data-id={annotation.id}>
  <path 
    class="a9s-outer"
    style={computedStyle ? 'display:none;' : undefined}
    points={points.map(xy => xy.join(',')).join(' ')} />

  <path 
    class="a9s-inner"
    style={computedStyle}
    points={points.map(xy => xy.join(',')).join(' ')} />
</g>
