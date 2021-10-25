import ControlLines from './ControlLines';
import ControlPoints from './ControlPoints';
import CurvePoints from './CurvePoints';
import { usePointsContext } from './PointsContext';

const Bezier = ({ scale }) => {
  const { points, setPoints } = usePointsContext();

  const projectFromRoomToCanvas = (p) => ({ x: p.x * scale, y: p.y * scale });
  const projectFromCanvasToRoom = (p) => ({ x: p.x / scale, y: p.y / scale });

  const projectedPoints = points.map(projectFromRoomToCanvas);

  return (
    <>
      <ControlLines points={projectedPoints} />
      <CurvePoints points={projectedPoints} />
      <ControlPoints
        points={projectedPoints}
        setPoints={(points) => setPoints(points.map(projectFromCanvasToRoom))}
      />
    </>
  );
};

export default Bezier;
