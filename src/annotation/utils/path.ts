import { getStroke } from "perfect-freehand";
import simplify from './simplify'

type GenericObject = Record<string,unknown>

export const options = {
  size: 4,
  thinning: 0.3,
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
}

const average = (a, b) => (a + b) / 2

function getControlPoints(x0, y0, x1, y1, x2, y2, t) {
  // t is the tension and typically between 0 (loose) and 1 (tight)
  const d01 = Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2)
  const d12 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

  const fa = (t * d01) / (d01 + d12) // scaling factor for control point 1
  const fb = (t * d12) / (d01 + d12) // scaling factor for control point 2

  const p1x = x1 + fa * (x0 - x2) // x2 control point for x1
  const p1y = y1 + fa * (y0 - y2) // y2 control point for y1

  const p2x = x1 - fb * (x0 - x2) // x2 control point for x2
  const p2y = y1 - fb * (y0 - y2) // y2 control point for y2

  return [p1x, p1y, p2x, p2y]
}

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


// export function getSvgPathFromStroke(stroke) {
//   // let stroke = simplify(strokePrev);
//   // console.log("Stroke", stroke);
//   if (!stroke.length) return ''

//   const d = stroke.reduce(
//     (acc, [x0, y0], i, arr) => {
//       const [x1, y1] = arr[(i + 1) % arr.length]
//       acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2)
//       return acc
//     },
//     ['M', ...stroke[0], 'C']
//   )

//   d.push('Z')
//   return d.join(' ')
// }

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
