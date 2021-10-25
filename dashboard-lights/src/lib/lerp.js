/**
 * Linear interpolation of a Bézier curve.
 * Supports linear, quadratic and cubic Bézier curves.
 * @param {number} t Lerp value
 * @param  {{ x: number, y: number }[]} p Points with x and y coordinates
 */
export default (t, ...p) => {
  if (p.length < 2 || p.length > 4) {
    throw new Error('Expected 2, 3, or 4 points as input.');
  }

  switch (p.length) {
    // Linear
    case 2:
      return {
        x: (1 - t) * p[0].x + t * p[1].x,
        y: (1 - t) * p[0].y + t * p[1].y,
      };

    // Quadratic
    case 3:
      return {
        x: (1 - t) ** 2 * p[0].x + 2 * t * (1 - t) * p[1].x + t ** 2 * p[2].x,
        y: (1 - t) ** 2 * p[0].y + 2 * t * (1 - t) * p[1].y + t ** 2 * p[2].y,
      };

    // Cubic
    case 4:
      return {
        x:
          (1 - t) ** 3 * p[0].x +
          3 * t * (1 - t) ** 2 * p[1].x +
          3 * t ** 2 * (1 - t) * p[2].x +
          t ** 3 * p[3].x,
        y:
          (1 - t) ** 3 * p[0].y +
          3 * t * (1 - t) ** 2 * p[1].y +
          3 * t ** 2 * (1 - t) * p[2].y +
          t ** 3 * p[3].y,
      };
  }
};
