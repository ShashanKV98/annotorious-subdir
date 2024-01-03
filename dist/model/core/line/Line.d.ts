import type { Bounds, Geometry, Shape } from '../Shape';
export interface Line extends Shape {
    geometry: LineGeometry;
}
export interface LineGeometry extends Geometry {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    bounds: Bounds;
}
//# sourceMappingURL=Line.d.ts.map