import { useContext, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';

export default function useFilters() {
  const {
    data,
    planets,
    setPlanets,
    filters,
    setFilters,
  } = useContext(StarWarsContext);


  const filterByName = (value) => {
    setFilters((state) => ({
      ...state,
      filterByName: { name: value },
    }));
  };

  useEffect(() => {
    const name = filters.filterByName.name;
    if (name !== '') {
      setPlanets(data.filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase())));
    } else setPlanets(data);
  }, [filters]);

  const filterByNumericValues = (column, comparison, number) => {
    setFilters((state) => ({
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues,
        {
          column,
          comparison,
          number,
        },
      ],
    }));
  };

  return {
    planets,
    filters,
    setFilters,
    filterByName,
    filterByNumericValues,
  };
}
