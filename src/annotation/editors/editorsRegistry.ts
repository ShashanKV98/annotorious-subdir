import { ShapeType, type Shape } from '../../model';
import type { SvelteComponent } from 'svelte';
import { PolygonEditor } from './polygon';
import { RectangleEditor } from './rectangle';
import { EllipseEditor } from './ellipse';
import { FreehandEditor } from './freehand'
import { LineEditor } from './line';

const REGISTERED = new Map<ShapeType, typeof SvelteComponent>([
  [ShapeType.RECTANGLE, RectangleEditor],
  [ShapeType.POLYGON, PolygonEditor],
  [ShapeType.ELLIPSE, EllipseEditor],
  [ShapeType.FREEHAND, FreehandEditor],
  [ShapeType.LINE, LineEditor],
])

export const getEditor = (shape: Shape) => REGISTERED.get(shape.type);

export const registerEditor = (shapeType: ShapeType, editor: typeof SvelteComponent) =>
  REGISTERED.set(shapeType, editor);
