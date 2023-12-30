import { ShapeType } from '../Shape'
import { registerShapeUtil, type ShapeUtil } from '../shapeUtils'
import type { Freehand } from './Freehand'

const FreehandUtil: ShapeUtil<Freehand> = {
  area: (freehand: Freehand): number => {
    const { points } = freehand.geometry

    let area = 0
    let j = points.length - 1

    for (let i = 0; i < points.length; i++) {
      area += (points[j][0] + points[i][0]) * (points[j][1] - points[i][1])
      j = i
    }

    return Math.abs(0.5 * area)
  },

  intersects: (freehand: Freehand, x: number, y: number): boolean => {
    // Based on https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html
    const { points } = freehand.geometry

    let inside = false

    for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
      const xi = points[i][0],
        yi = points[i][1]
      const xj = points[j][0],
        yj = points[j][1]

      const intersect =
        yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi

      if (intersect) inside = !inside
    }

    return inside
  },
}

registerShapeUtil(ShapeType.FREEHAND, FreehandUtil)
