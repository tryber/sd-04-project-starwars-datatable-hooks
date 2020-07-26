import { createContext } from 'react';
const INITIAL_STATE = {
  isFetching: true,
  planetsData: [],
  filteredPlanets: [],
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};
export const StarWarsContext = createContext(INITIAL_STATE);
export default function Provider({children}) {
  return (
    <StarWarsContext.Provider>
      {children}
    </StarWarsContext.Provider>
  );
}