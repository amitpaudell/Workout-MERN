import { createContext } from 'react';

export const WorkoutsContext = createContext();

export const WorkoutsContextProvider = ({ children }) => {
  return (
    <WorkoutsContext.Provider value={{ workouts: [] }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
