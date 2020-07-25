import { useContext } from 'react';
import { StarWarsContext } from '../contexts/StarWarsContext';

const useFilters = () => {
  const { filters, setFilters } = useContext(StarWarsContext);

  const setFilterName = (value) =>
    setFilters((oldFilters) => ({ ...oldFilters, filterByName: { name: value } }));

  return [{ filterName: filters.filterByName.name || '' }, { setFilterName }];
};

export default useFilters;
