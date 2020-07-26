import { createContext } from 'react';

export const StarWarsContext = createContext();

export default function Provider({children}) {
  return (
    <StarWarsContext.Provider>
      {children}
    </StarWarsContext.Provider>
  );
}

