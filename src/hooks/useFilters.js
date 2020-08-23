import { useContext, useEffect } from 'react';
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

 /*  useEffect(() => {
    setFilterByNumericValues(filterByNumericValues.filter((e) => e !== removed));
  }, [removed]); */

  return {
    filters,
    setFilters,
    filterByName,
  };
}
