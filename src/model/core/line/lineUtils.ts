import { ShapeType } from '../Shape'
import type { Line } from './Line'
import { registerShapeUtil, type ShapeUtil } from '../shapeUtils'

export const LineUtil: ShapeUtil<Line> = {
  area: (line: Line): number => 0,

  intersects: (line: Line, x: number, y: number): boolean =>
    x >= line.geometry.x1 &&
    x <= line.geometry.x2 &&
    y >= line.geometry.y1 &&
    y <= line.geometry.y2,
}

registerShapeUtil(ShapeType.LINE, LineUtil)
