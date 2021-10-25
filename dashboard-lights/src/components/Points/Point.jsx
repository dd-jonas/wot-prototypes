const Point = ({ point }) => {
  return (
    <div
      className="point"
      style={{ left: `${point.x}px`, top: `${point.y}px` }}
    ></div>
  );
};

export default Point;
