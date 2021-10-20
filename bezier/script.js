import { lerp } from './lerp.js';

// HTML elements
const bezierContainer = document.getElementById('bezier-container');
const formContainer = document.getElementById('form-container');

// Constants
const STEPS = 50;

// Points
const points = [
  { x: 500, y: 100 },
  { x: 800, y: 900 },
  { x: 1600, y: 700 },
  { x: 1800, y: 100 },
  { x: 900, y: 300 },
];

// Add control points (quadratic Beziér)
const bezier = points.flatMap((point, i) => {
  const nextPoint = points[i + 1];
  if (!nextPoint) return point;

  const controlPoint = lerp(0.5, point, nextPoint);

  return [point, controlPoint];
});

// Get an array of lerped points of a curve
const curvePoints = (...points) => {
  const lerpPoints = [];

  for (let t = 1 / STEPS; t < 1; t += 1 / STEPS) {
    lerpPoints.push(lerp(t, ...points));
  }

  return lerpPoints;
}

// Draw a point to the viewport
const drawPoint = (p, color = 'black', isControlPoint = false) => {
  const point = document.createElement('div');
  point.className = `point ${isControlPoint ? 'control' : ''}`;
  point.style.backgroundColor = color;
  
  point.style.left = `${p.x}px`;
  point.style.top = `${p.y}px`;

  bezierContainer.appendChild(point);
}

// Draw the Beziér curves
const render = () => {
  // Clear the screen
  bezierContainer.innerHTML = '';

  bezier.forEach((point, i) => {
    // Draw the curve  
    if (i % 2 === 0 && i !== bezier.length - 1) {
      curvePoints(point, bezier[i + 1], bezier[i + 2])
        .forEach((point) => drawPoint(point));
    }

    // Draw the control points
    drawPoint(point, 'red', true);
  });
}

render();

// Coords input
bezier.forEach((point, i) => {
  const title = document.createElement('p');
  title.textContent = `p${i}`;
  
  const labelX = document.createElement('label');
  labelX.textContent = 'x';
  const inputX = document.createElement('input');
  inputX.value = point.x;
  inputX.type = 'number';
  inputX.step = 50;

  const labelY = document.createElement('label');
  labelY.textContent = 'y';
  const inputY = document.createElement('input');
  inputY.value = point.y;
  inputY.type = 'number';
  inputY.step = 50;

  const updateCoords = ({ x, y }) => {
    if (x) bezier[i].x = x;
    if (y) bezier[i].y = y;
    
    render();
  };
  
  inputX.addEventListener('change', (e) => updateCoords({ x: e.target.value }));
  inputY.addEventListener('change', (e) => updateCoords({ y: e.target.value }));

  formContainer.appendChild(title);
  formContainer.appendChild(labelX);
  formContainer.appendChild(inputX);
  formContainer.appendChild(labelY);
  formContainer.appendChild(inputY);
});
