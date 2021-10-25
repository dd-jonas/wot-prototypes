import { useEffect, useRef, useState } from 'react';

import Bezier from './Points/Bezier';

const Canvas = ({ dimensions }) => {
  const [scale, setScale] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    setScale(ref.current.offsetWidth / dimensions.width);
  }, []);

  return (
    <div
      ref={ref}
      id="canvas"
      style={{
        aspectRatio: `${dimensions.width / dimensions.height}`,
      }}
    >
      {scale ? <Bezier scale={scale} /> : null}
    </div>
  );
};

export default Canvas;
