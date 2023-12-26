import type { SvelteComponent } from 'svelte';
import type { DrawingMode } from '../../AnnotoriousOpts';
export type DrawingTool = 'rectangle' | 'polygon' | string;
export type DrawingToolOpts = {
    drawingMode?: DrawingMode;
    [key: string]: string;
};
export declare const listDrawingTools: () => string[];
export declare const getTool: (name: string) => {
    tool: typeof SvelteComponent;
    opts?: DrawingToolOpts | undefined;
} | undefined;
export declare const registerTool: (name: string, tool: typeof SvelteComponent, opts?: DrawingToolOpts) => Map<string, {
    tool: typeof SvelteComponent;
    opts?: DrawingToolOpts | undefined;
}>;
//# sourceMappingURL=drawingToolsRegistry.d.ts.map