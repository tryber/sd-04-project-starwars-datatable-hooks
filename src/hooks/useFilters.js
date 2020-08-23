import { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function useFilters() {
  const {
    filters,
    setFilters,
  } = useContext(StarWarsContext);

  const filterByName = (value) => {
    setFilters((state) => ({
      ...state,
      filterByName: { name: value },
    }));
  };

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
    filters,
    setFilters,
    filterByName,
    filterByNumericValues,
  };
}
