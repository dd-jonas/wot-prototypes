import { pointSize } from '../../constants/bezier';

const ControlLines = ({ points }) => {
  const lines = points
    // Find line from previous to current point
    .map((point, i) => {
      if (i === 0) return;

      const prev = points[i - 1];
      const dx = point.x - prev.x;
      const dy = point.y - prev.y;

      return {
        left: prev.x + pointSize / 2,
        top: prev.y + pointSize / 2,
        length: Math.sqrt(dx ** 2 + dy ** 2),
        angle:
          dx >= 0
            ? Math.atan(dy / dx) * (180 / Math.PI)
            : Math.atan(dy / dx) * (180 / Math.PI) + 180,
      };
    })
    // Ignore first element (undefined)
    .slice(1);

  return (
    <div className="points--lines">
      {lines.map((line, i) => (
        <div
          key={i}
          className="line"
          style={{
            left: `${line.left}px`,
            top: `${line.top}px`,
            width: `${line.length}px`,
            transform: `rotate(${line.angle}deg)`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ControlLines;
