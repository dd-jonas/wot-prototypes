import DragPoint from './DragPoint';

const ControlPoints = ({ points, setPoints }) => {
  const onDrag = (e, { x, y }) => {
    const index = +e.target.dataset.index;
    setPoints(points.map((point, i) => (i === index ? { x, y } : point)));
  };

  return (
    <div className="points--control">
      {points.map((point, i) => (
        <DragPoint key={i} point={point} index={i} onDrag={onDrag}>
          {i % 2 === 0 ? i / 2 + 1 : null}
        </DragPoint>
      ))}
    </div>
  );
};

export default ControlPoints;
