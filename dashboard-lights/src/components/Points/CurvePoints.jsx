import { curveSteps } from '../../constants/bezier';
import lerp from '../../lib/lerp';
import Point from './Point';

const CurvePoints = ({ points }) => {
  // Group [p0, p1, p2, p3, p4] as [[p0, p1, p2], [p2, p3, p4]]
  const groups = points.reduce((groups, point, i) => {
    if (i % 2 === 0) {
      // Last point of previous group
      if (i !== 0) {
        groups[groups.length - 1].push(point);
      }

      // First point of next group
      if (i !== points.length - 1) {
        groups.push([point]);
      }
    } else {
      // Middle point
      groups[groups.length - 1].push(point);
    }

    return groups;
  }, []);

  const curvePoints = groups.flatMap((group) =>
    [...new Array(curveSteps - 1)].map((_, j) =>
      lerp((j + 1) / curveSteps, ...group)
    )
  );

  return (
    <div className="points--curve">
      {curvePoints.map((point, i) => (
        <Point key={i} point={point} />
      ))}
    </div>
  );
};

export default CurvePoints;
