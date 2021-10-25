import { roomDimensions } from '../constants/room';
import Canvas from './Canvas';
import PointButtons from './Points/PointButtons';
import PointsProvider from './Points/PointsContext';

const App = () => {
  return (
    <PointsProvider>
      <section className="lightgrid">
        <h1>Dashboard lights</h1>
        <PointButtons />
        <Canvas dimensions={roomDimensions} />
      </section>
    </PointsProvider>
  );
};

export default App;
