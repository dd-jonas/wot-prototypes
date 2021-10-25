import { useRef } from 'react';
import Draggable from 'react-draggable';

const DragPoint = ({ point, onDrag, index, children }) => {
  const ref = useRef(null);

  return (
    <Draggable nodeRef={ref} position={point} bounds="#canvas" onDrag={onDrag}>
      <div ref={ref} className="point" data-index={index}>
        {children}
      </div>
    </Draggable>
  );
};

export default DragPoint;
