import { useContext, useEffect, useCallback } from 'react';
import { v4 } from 'uuid';
import { StarWarsContext } from '../contexts/StarWarsContext';

const useFilters = () => {
  const { filters, setFilters, filterableColumns, allColumns } = useContext(StarWarsContext);

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

  const setOrder = (order) => setFilters((oldFilters) => ({ ...oldFilters, order }));

  const sortPlanets = useCallback(
    (data) => {
      if (!data.length) return [];
      const planetKey = filters.order.column.toLowerCase().replace(' ', '_');
      if (isNaN(data[0][planetKey])) {
        data.sort((a, b) => (a[planetKey] > b[planetKey] ? 1 : -1));
      } else {
        data.sort((a, b) => a[planetKey] - b[planetKey]);
      }
      if (filters.order.sort === 'DESC') data.reverse();
      return data;
    },
    [filters.order],
  );

  const filterByNumericValues = useCallback(
    (data) =>
      filters.filterByNumericValues.reduce(
        (array, filter) =>
          array.filter((planet) => {
            switch (filter.comparison) {
              case 'maior que':
                return Number(planet[filter.column]) > Number(filter.value);
              case 'menor que':
                return Number(planet[filter.column]) < Number(filter.value);
              case 'igual a':
                return Number(planet[filter.column]) === Number(filter.value);
              default:
                return false;
            }
          }),
        data,
      ),
    [filters.filterByNumericValues],
  );

  const filterByName = useCallback(
    (data) =>
      data.filter((planet) =>
        planet.name.toLowerCase().includes(filters.filterByName.name.toLowerCase()),
      ),
    [filters.filterByName.name],
  );

  useEffect(() => {
    setFilters((oldFilters) => ({
      ...oldFilters,
      filterableColumns: filterableColumns.filter(
        (column) => !filters.filterByNumericValues.some((filter) => filter.column === column),
      ),
    }));
  }, [filters.filterByNumericValues, setFilters, filterableColumns]);

  return [
    {
      filterName: filters.filterByName.name,
      filtersNumber: filters.filterByNumericValues,
      filterableColumns: filters.filterableColumns,
      order: filters.order,
      allColumns,
    },
    {
      setFilterName,
      addFilterNumber,
      removeFilterNumber,
      setOrder,
    },
    {
      filterByName,
      filterByNumericValues,
      sortPlanets,
    },
  ];
};

export default useFilters;
