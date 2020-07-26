import React, { createContext, useState, useEffect } from 'react';
import getPlanets from '../services/getPlanets';

export const StarWarsContext = createContext();

export default function StarWarsProvider({ children }) {
  const INITIAL_STATE = {
    isFetching: true,
    data: [],
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

  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    getPlanets().then((planetsData) =>
      setState({
        ...state,
        data: planetsData.results,
        isFetching: false,
        filteredPlanets: planetsData.results,
      }),
    );
  }, []);

  function filterByName(planets, string) {
    const filteredPlanets = planets.filter(({ name }) =>
      name.toLowerCase().includes(string.toLowerCase()),
    );
    setState({
      ...state,
      filteredPlanets,
      filterByName: { name: string }
    });
  }
  const Context = { state, setState, filterByName };

  return <StarWarsContext.Provider value={Context}>{children}</StarWarsContext.Provider>;
}
