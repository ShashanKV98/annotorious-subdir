import { getStroke } from "perfect-freehand";
import simplify from './simplify'

type GenericObject = Record<string,unknown>

export const options = {
  size: 4,
  thinning: 0.5,
  smoothing: 0.5,
  streamline: 0.5,
  easing: (t) => t,
  start: {
    taper: 0,
    easing: (t) => t,
    cap: true,
  },
  end: {
    taper: 0,
    easing: (t) => t,
    cap: true,
  },
};

const average = (a, b) => (a + b) / 2

export function getSvgPathFromStroke(points, closed = true) {
  const len = points.length

  if (len < 4) {
    return ``
  }

  let a = points[0]
  let b = points[1]
  const c = points[2]

  let result = `M${a[0].toFixed(2)},${a[1].toFixed(2)} Q${b[0].toFixed(
    2
  )},${b[1].toFixed(2)} ${average(b[0], c[0]).toFixed(2)},${average(
    b[1],
    c[1]
  ).toFixed(2)} T`

  for (let i = 2, max = len - 1; i < max; i++) {
    a = points[i]
    b = points[i + 1]
    result += `${average(a[0], b[0]).toFixed(2)},${average(a[1], b[1]).toFixed(
      2
    )} `
  }

  if (closed) {
    result += 'Z'
  }

  return result
}

export function getSmoothPathData(
  points: Array<Array<number>>,
  options: GenericObject,
  simplifyPath: Boolean = false
) {
  const stroke = getStroke(points, options)
  const pathData = getSvgPathFromStroke(
    simplifyPath ? simplify(stroke,0.25) : stroke
  )
  return pathData
}
