import { ShapeType } from '../Shape'
import type { Line } from './Line'
import { registerShapeUtil, type ShapeUtil } from '../shapeUtils'

export const LineUtil: ShapeUtil<Line> = {
  area: (line: Line): number => 0,

  intersects: (line: Line, x: number, y: number): boolean => {
    const x1 = line.geometry.x1
    const x2 = line.geometry.x2
    const y1 = line.geometry.y1
    const y2 = line.geometry.y2
    var distanceToStart = Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2))
    var distanceToEnd = Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2))

    // Calculate the length of the line segment
    var lineLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

    // Calculate the sum of the distances from the point to each endpoint
    var totalDistance = distanceToStart + distanceToEnd

    // Check if the point is approximately on the line segment
    return Math.abs(totalDistance - lineLength) <= 0.1
  }
}

registerShapeUtil(ShapeType.LINE, LineUtil)
