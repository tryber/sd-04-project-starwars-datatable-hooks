import { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function useFilters() {
  const {
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    order,
    setOrder,
    removed,
    setRemoved,
  } = useContext(StarWarsContext);

  useEffect(() => {
    setFilterByNumericValues(filterByNumericValues.filter((e) => e !== removed));
  }, [removed]);

  return {
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    order,
    setOrder,
    removed,
    setRemoved,
  };
}
