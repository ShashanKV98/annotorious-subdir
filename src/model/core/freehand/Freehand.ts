import type { Bounds, Geometry, Shape } from '../Shape'

export interface Freehand extends Shape {
  geometry: FreehandGeometry
}

export interface FreehandGeometry extends Geometry {
  points: Array<Array<number>>

  bounds: Bounds
}
