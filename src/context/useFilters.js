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
    const numbers = filters.filterByNumericValues;

    if (numbers.length === 0) {
      setPlanets(data.filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase())));
    } else setPlanets(data);

    if (numbers.length > 0) {
      setPlanets(
        numbers.reduce(
          (acc, { column, comparison, number }) =>
            acc.filter((planet) => {
              switch (comparison) {
                case 'maior que':
                  return Number(planet[column]) > Number(number);
                case 'menor que':
                  return Number(planet[column]) < Number(number);
                case 'igual a':
                  return Number(planet[column]) === Number(number);
                default:
                  return [];
              }
            }),
          planets,
        )
      );
    }
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
