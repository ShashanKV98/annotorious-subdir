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

    let [xmin, ymin] = [initialBounds.minX, initialBounds.minY];
    let [xmax, ymax] = [initialBounds.maxX, initialBounds.maxY];

    const [dx, dy] = delta;

    if (handle === Handle.SHAPE) {
      xmin += dx;
      xmax += dx;
      ymin += dy;
      ymax += dy;
    } else {
      switch (handle) {
        case Handle.LEFT: { 
          xmin += dx;
          ymin += dy;
          break;
        }

        case Handle.RIGHT: {
          xmax += dx;
          ymax += dy;
          break;
        }
      }
    }

    const x1 = Math.min(xmin, xmax);
    const x2 = Math.min(ymin, ymax);
    const y1 = Math.max(xmin, xmax);
    const y2 = Math.max(ymin, ymax);

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

  <line 
    class="a9s-outer"
    style={computedStyle ? 'display:none;' : undefined}
    on:pointerdown={grab(Handle.SHAPE)}
    x1={geom.x1} y1={geom.y1} x2={geom.x2} y2={geom.y2} />

  <line 
    class="a9s-inner a9s-shape-handle"
    style={computedStyle}
    on:pointerdown={grab(Handle.SHAPE)}
    x1={geom.x1} y1={geom.y1} x2={geom.x2} y2={geom.y2} />

    <rect 
        class="a9s-corner-handle a9s-shape-handle"
        on:pointerdown={grab(Handle.LEFT)}
        x={geom.x1 - handleSize / 2} y={geom.y1 - handleSize / 2} height={handleSize} width={handleSize} />

    <rect 
        class="a9s-corner-handle a9s-shape-handle"
        on:pointerdown={grab(Handle.RIGHT)}
        x={geom.x2 - handleSize / 2} y={geom.y2 - handleSize / 2} height={handleSize} width={handleSize} />
</Editor>
