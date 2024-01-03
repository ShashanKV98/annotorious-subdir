<script type="ts" lang="ts">
  import type { DrawingStyle } from '@annotorious/core';
  import type { Geometry, ImageAnnotation, LineGeometry } from '../../model';
  import { computeStyle } from '../utils/styling';
  
  /** Props **/
  export let annotation: ImageAnnotation;
  export let geom: Geometry;
  export let style: DrawingStyle | ((annotation: ImageAnnotation) => DrawingStyle) = undefined;

  $: computedStyle = computeStyle(annotation, style);

  $: ({ x1, y1, x2, y2 } = geom as LineGeometry);
</script>

<g data-id={annotation.id}>
  <line
    class="a9s-outer"
    style={computedStyle ? 'display:none;' : undefined}
    x1={x1} 
    y1={y1} 
    x2={x2} 
    y2={y2} />

  <line
    class="a9s-inner"
    style={computedStyle}
    x1={x1} 
    y1={y1} 
    x2={x2} 
    y2={y2} />
</g>
