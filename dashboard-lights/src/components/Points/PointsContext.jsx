import { createContext, useContext, useState } from 'react';

const PointsContext = createContext([]);

const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState([
    { x: 50, y: 50 },
    { x: 100, y: 200 },
    { x: 230, y: 110 },
    { x: 350, y: 20 },
    { x: 450, y: 220 },
  ]);

  return (
    <PointsContext.Provider value={{ points, setPoints }}>
      {children}
    </PointsContext.Provider>
  );
};

export const usePointsContext = () => useContext(PointsContext);

export default PointsProvider;
