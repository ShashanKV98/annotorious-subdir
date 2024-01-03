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
    <defs>
    <!-- A marker to be used as an arrowhead -->
    <marker
      id="arrow"
      viewBox={`0 0 10 10`}
      refX = "5"
      refY = "5"
      markerWidth={`6`}
      markerHeight={`6`}
      orient="auto-start-reverse">
      
    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />

    </marker>
  </defs>
  <line
    class="a9s-outer"
    style={computedStyle ? 'display:none;' : undefined}
    x1={x1} 
    y1={y1} 
    x2={x2} 
    y2={y2} 
    marker-end="url(#arrow)"/>

  <line
    class="a9s-inner"
    style={computedStyle}
    x1={x1} 
    y1={y1} 
    x2={x2} 
    y2={y2}
    marker-end="url(#arrow)" />
</g>
