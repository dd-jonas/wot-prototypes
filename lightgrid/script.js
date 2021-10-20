/**
 * Lightgrid
 */

const getBulbs = () => {
  const els = document.getElementsByClassName('bulb');

  return [...els].map((el, i) => ({
    coords: [i % 8, Math.floor(i / 8)],
    dim: (pct) => {
      const value = Math.floor((pct + 9) / 10) * 10;
      el.classList = `bulb dim-${Math.min(Math.max(value, 0), 100)}`;
    }
  }));
}

const distance = (p1, p2) => {
  const a = p1[0] - p2[0];
  const b = p1[1] - p2[1];
  return Math.sqrt(a*a + b*b);
}

const bulbs = getBulbs();

const calculateDimValues = (ghost) => {
  bulbs.forEach((bulb) => {
    const d = distance(ghost, bulb.coords);
    const falloff = .75; // Max distance to trigger light
    const dimValue = -(100/falloff) * (d - 0.5) + 100;

    bulb.dim(dimValue);
  });
}

/**
 * Minimap
 */

const minimap = document.getElementById('minimap');

minimap.addEventListener('mousemove', (e) => {
  const { top, left } = e.target.getBoundingClientRect();
  const [x, y] = [e.clientX - left, e.clientY - top];
  const [width, height] = [e.target.clientWidth, e.target.clientHeight];

  const ghost = [x / width * 7, y / height * 2];
  calculateDimValues(ghost);
});

minimap.addEventListener('mouseleave', () => {
  bulbs.forEach((bulb) => {
    bulb.dim(0);
  });
})
