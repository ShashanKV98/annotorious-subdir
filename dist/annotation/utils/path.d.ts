type GenericObject = Record<string, unknown>;
export declare const options: {
    size: number;
    thinning: number;
    smoothing: number;
    streamline: number;
    easing: (t: any) => any;
    start: {
        taper: number;
        easing: (t: any) => any;
        cap: boolean;
    };
    end: {
        taper: number;
        easing: (t: any) => any;
        cap: boolean;
    };
};
export declare function getSvgPathFromStroke(points: any, closed?: boolean): string;
export declare function getSmoothPathData(points: Array<Array<number>>, options: GenericObject, simplifyPath?: Boolean): string;
export {};
//# sourceMappingURL=path.d.ts.map