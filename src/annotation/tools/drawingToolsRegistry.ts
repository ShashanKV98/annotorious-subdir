import type { SvelteComponent } from 'svelte';
import { RubberbandRectangle } from './rectangle';
import { RubberbandPolygon } from './polygon';
import { RubberbandEllipse } from './ellipse';
import type { DrawingMode } from '../../AnnotoriousOpts';

export type DrawingTool = 'rectangle' | 'polygon' | 'ellipse' | string;

export type DrawingToolOpts = {

  drawingMode?: DrawingMode;

  [key: string]: string;

}

export const REGISTERED = new Map<DrawingTool, { tool: typeof SvelteComponent, opts?: DrawingToolOpts }>([
  ['rectangle', { tool: RubberbandRectangle }],
  ['polygon', { tool: RubberbandPolygon }],
  ['ellipse', { tool: RubberbandEllipse }],
]);

export const listDrawingTools = () => [...REGISTERED.keys()];

export const getTool = (name: string) => REGISTERED.get(name);
  
export const registerTool = (name: string, tool: typeof SvelteComponent, opts?: DrawingToolOpts) =>
  REGISTERED.set(name, { tool, opts });
