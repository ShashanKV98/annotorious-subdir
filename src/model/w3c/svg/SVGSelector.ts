import type { W3CSelector } from '@annotorious/core';
import { boundsFromPoints, ShapeType } from '../../core';
import type { Ellipse, EllipseGeometry, Polygon, PolygonGeometry, Freehand, FreehandGeometry,Line, LineGeometry, Shape } from '../../core';
import { SVG_NAMESPACE, insertSVGNamespace, sanitize } from './SVG';
import { getSmoothPathData, options } from '../../../annotation/utils/path';

export interface SVGSelector extends W3CSelector {

  type: 'SvgSelector';

  value: string;
  
}

const parseSVGXML = (value: string): Element => {
  const parser = new DOMParser();

  const doc = parser.parseFromString(value, "image/svg+xml");

  // SVG needs a namespace declaration - check if it's set or insert if not
  const isPrefixDeclared = doc.lookupPrefix(SVG_NAMESPACE); // SVG declared via prefix
  const isDefaultNamespaceSVG = doc.lookupNamespaceURI(null); // SVG declared as default namespace

  if (isPrefixDeclared || isDefaultNamespaceSVG) {
    return sanitize(doc).firstChild as Element;
  } else {
    return sanitize(insertSVGNamespace(doc)).firstChild as Element;
  }
}

const parseSVGFreehand = (value: string): Freehand => {
  const [a, b, str] = value.match(/(<path d=["|'])([^("|')]*)/) || []

  if (!str) return
  const pathRegex = /([MQZT])([^MQZT]*)/g
  const matches = Array.from(str.matchAll(pathRegex))
  const points = matches.map((match) => {
    const command = match[1]
    const pointData = match[2].trim().split(/\s+/).map(parseFloat)
    return pointData
  })
  
  return {
    type: ShapeType.FREEHAND,
    geometry: {
      points,
      bounds: boundsFromPoints(points as [number, number][]),
    },
  }
}

const parseSVGPolygon = (value: string): Polygon => {
  const [a, b, str] = value.match(/(<polygon points=["|'])([^("|')]*)/) || [];

  if (!str) return;

  const points = str.split(' ').map((p) => p.split(',').map(parseFloat));

  return {
    type: ShapeType.POLYGON,
    geometry: {
      points,
      bounds: boundsFromPoints(points as [number, number][])
    }
  };
}

const parseSVGEllipse = (value: string): Ellipse => {
  const doc = parseSVGXML(value);

  const cx = parseFloat(doc.getAttribute('cx'));
  const cy = parseFloat(doc.getAttribute('cy'));
  const rx = parseFloat(doc.getAttribute('rx'));
  const ry = parseFloat(doc.getAttribute('ry'));

  const bounds = {
    minX: cx - rx,
    minY: cy - ry,
    maxX: cx + rx,
    maxY: cy + ry
  };

  return {
    type: ShapeType.ELLIPSE,
    geometry: {
      cx,
      cy,
      rx,
      ry,
      bounds
    }
  };
}

const parseSVGLine = (value: string): Line => {
  const doc = parseSVGXML(value)

  const x1 = parseFloat(doc.getAttribute('x1'))
  const x2 = parseFloat(doc.getAttribute('x2'))
  const y1 = parseFloat(doc.getAttribute('y1'))
  const y2 = parseFloat(doc.getAttribute('y2'))

  const bounds = {
    minX: Math.min(x1, x2),
    minY: Math.min(y1, y2),
    maxX: Math.max(x1, x2),
    maxY: Math.max(y1, y2),
  }

  return {
    type: ShapeType.LINE,
    geometry: {
      x1,
      x2,
      y1,
      y2,
      bounds,
    },
  }
}


export const parseSVGSelector = <T extends Shape>(valueOrSelector: SVGSelector | string): T => {
  const value = typeof valueOrSelector === 'string' ? valueOrSelector : valueOrSelector.value;

  if (value.includes('<polygon points='))
    return parseSVGPolygon(value) as unknown as T
  else if (value.includes('<path d='))
    return parseSVGFreehand(value) as unknown as T
  else if (value.includes('<ellipse '))
    return parseSVGEllipse(value) as unknown as T
  else if (value.includes('<line '))
    return parseSVGLine(value) as unknown as T
}

export const serializeSVGSelector = (shape: Shape): SVGSelector => {
  let value: string;

  if (shape.type === ShapeType.POLYGON) {
    const geom = shape.geometry as PolygonGeometry
    const { points } = geom
    value = `<svg><polygon points="${points
      .map((xy) => xy.join(','))
      .join(' ')}" /></svg>`
  } else if (shape.type === ShapeType.FREEHAND) {
    const geom = shape.geometry as FreehandGeometry
    const pathData = getSmoothPathData(geom.points, options)
    value = `<svg><path d="${pathData}"/></svg>`
  } else if (shape.type === ShapeType.ELLIPSE) {
    const geom = shape.geometry as EllipseGeometry
    value = `<svg><ellipse cx="${geom.cx}" cy="${geom.cy}" rx="${geom.rx}" ry="${geom.ry}" /></svg>`
  } else if (shape.type === ShapeType.LINE) {
    const geom = shape.geometry as LineGeometry
    value = `<svg><line x1="${geom.x1}" x2="${geom.x2}" y1="${geom.y1}" y2="${geom.y2}" /></svg>`
  }

  if (value) {
    return { type: 'SvgSelector', value };
  } else {
    throw `Unsupported shape type: ${shape.type}`;
  }
}
