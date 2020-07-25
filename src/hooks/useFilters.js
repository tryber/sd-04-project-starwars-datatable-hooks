import { useContext } from 'react';
import { v4 } from 'uuid';
import { StarWarsContext } from '../contexts/StarWarsContext';

const useFilters = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  
  const setFilterName = (value) =>
    setFilters((oldFilters) => ({ ...oldFilters, filterByName: { name: value } }));

  const addFilterNumber = (filter) =>
    setFilters((oldFilters) => ({
      ...oldFilters,
      filterByNumericValues: [...oldFilters.filterByNumericValues, { ...filter, id: v4() }],
    }));

  const removeFilterNumber = (filter) =>
    setFilters((oldFilters) => ({
      ...oldFilters,
      filterByNumericValues: oldFilters.filterByNumericValues.filter(
        (oldNumericFilter) => oldNumericFilter.id !== filter.id,
      ),
    }));

  return [
    { filterName: filters.filterByName.name || '', filtersNumber: filters.filterByNumericValues },
    { setFilterName, addFilterNumber, removeFilterNumber },
  ];
};

export default useFilters;
