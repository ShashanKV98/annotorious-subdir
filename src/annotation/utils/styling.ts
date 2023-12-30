import type { DrawingStyle } from '@annotorious/core';
import type { ImageAnnotation } from '../../model';

export const computeStyle = (annotation: ImageAnnotation, style?: DrawingStyle | ((a: ImageAnnotation) => DrawingStyle), staticProps?: DrawingStyle) => {
  const computed = typeof style === 'function' ? style(annotation) : style;

  if (computed) {
    const { fill, fillOpacity } = computed;

    let css = '';
    let staticOpacity = undefined
    
    if (fill)
      css += `fill:${fill};stroke:${fill};`;
    
    if (staticProps) {
      staticOpacity =  staticProps.fillOpacity
    }
    css += `fill-opacity:${staticOpacity || fillOpacity || '0.25'};`

    return css;
  }
}