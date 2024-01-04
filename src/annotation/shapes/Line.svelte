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
      refX = "9"
      refY = "5"
      markerWidth={`6`}
      markerHeight={`6`}
      orient="auto-start-reverse">
      
    <path stroke-linecap="round" stroke-linejoin="round" d="M 0 0 L 10 5 L 0 10 z" />

    </marker>
  </defs>
  <line
    class="a9s-outer"
    style={computedStyle ? 'display:none;' : 'stroke-width: 3'}
    x1={x1} 
    y1={y1} 
    x2={x2} 
    y2={y2} 
    stroke-linecap="round" stroke-linejoin="round"
    marker-end="url(#arrow)"/>

  <line
    class="a9s-inner"
    style={computedStyle || 'stroke-width: 3'}
    x1={x1}
    y1={y1} 
    x2={x2} 
    y2={y2}
    stroke-linecap="round" stroke-linejoin="round"
    marker-end="url(#arrow)" />
</g>
