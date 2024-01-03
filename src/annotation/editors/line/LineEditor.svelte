<script type="ts" lang="ts">
  import type { Line } from '../../../model';
  import type { Transform } from '../../Transform';
  import { Editor, Handle } from '..';

  /** Props */
  export let shape: Line;
  export let computedStyle: string = undefined;
  export let transform: Transform;
  export let viewportScale: number = 1;

  $: geom = shape.geometry;

  $: handleSize = 10 / viewportScale;

  const editor = (line: Line, handle: Handle, delta: [number, number]) => {
    const initialBounds = line.geometry.bounds;

    let x1 = line.geometry.x1
    let x2 = line.geometry.x2
    let y1 = line.geometry.y1
    let y2 = line.geometry.y2
    // let [xmin, ymin] = [initialBounds.minX, initialBounds.minY];
    // let [xmax, ymax] = [initialBounds.maxX, initialBounds.maxY];

    const [dx, dy] = delta;

    if (handle === Handle.SHAPE) {
      x1 += dx;
      x2 += dx;
      y1 += dy;
      y2 += dy;
    } else {
      switch (handle) {
        case Handle.LEFT: { 
          x1 += dx;
          y1 += dy;
          break;
        }

        case Handle.RIGHT: {
          x2 += dx;
          y2 += dy;
          break;
        }
      }
    }

    return {
      ...line,
      geometry: {
        x1, y1, x2, y2,
        bounds: {
          minX: Math.min(x1,x2),
          minY: Math.min(y1,y2),
          maxX: Math.max(x1,x2),
          maxY: Math.max(y1,y2),
        }
      }
    };
  }
</script>

<Editor
  shape={shape}
  transform={transform}
  editor={editor}
  on:grab
  on:change 
  on:release
  let:grab={grab}>

  <defs>
    <!-- A marker to be used as an arrowhead -->
    <marker
      class="arrow"
      viewBox={`0 0 ${handleSize/2} ${handleSize/2}`}
      markerWidth={`${handleSize/2}`}
      markerHeight={`${handleSize/2}`}
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
  <line 
    class="a9s-outer"
    style={computedStyle ? 'display:none;' : 'stroke: black'}
    on:pointerdown={grab(Handle.SHAPE)}
    x1={geom.x1} y1={geom.y1} x2={geom.x2} y2={geom.y2} marker-end="url(.arrow)"/>

  <line 
    class="a9s-inner a9s-shape-handle"
    style={'stroke: black' || computedStyle}
    on:pointerdown={grab(Handle.SHAPE)}
    x1={geom.x1} y1={geom.y1} x2={geom.x2} y2={geom.y2} />

    <circle 
        class="a9s-corner-handle"
        style=""
        on:pointerdown={grab(Handle.LEFT)}
        cx={geom.x1} cy={geom.y1}
        r={handleSize / 2} />

    <circle 
        class="a9s-corner-handle"
        on:pointerdown={grab(Handle.RIGHT)}
        cx={geom.x2} cy={geom.y2} r={handleSize / 2}/>
</Editor>
