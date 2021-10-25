import { roomDimensions } from '../../constants/room';
import { usePointsContext } from './PointsContext';

const PointButtons = () => {
  const { setPoints } = usePointsContext();

  const addPoint = () => {
    setPoints((points) => {
      const newPoint = {
        x: roomDimensions.width / 2,
        y: roomDimensions.height / 2,
      };

      const newControlPoint = {
        x: newPoint.x - (newPoint.x - points[points.length - 1].x) / 2,
        y: newPoint.y - (newPoint.y - points[points.length - 1].y) / 2,
      };

      return [...points, newControlPoint, newPoint];
    });
  };

  const removePoint = () => {
    setPoints((points) => (points.length === 1 ? points : points.slice(0, -2)));
  };

  return (
    <>
      <button className="button-point" onClick={addPoint}>
        + Add
      </button>
      <button className="button-point" onClick={removePoint}>
        - Remove
      </button>
    </>
  );
};

export default PointButtons;
