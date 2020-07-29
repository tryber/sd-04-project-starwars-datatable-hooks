import { useCallback, useMemo } from 'react';
import { v4 } from 'uuid';
import { useFilters as useFiltersState } from '../global/filters';

const useFilters = () => {
  const {
    filterByName: filterByNameState,
    filterByNumericValues: filterByNumericValuesState,
    order: orderState,
    filterableColumns,
  } = useFiltersState();

  const setFilterName = (value) => filterByNameState.set(value);

  const addFilterNumber = (filter) => filterByNumericValuesState.add({ ...filter, id: v4() });

  const removeFilterNumber = (filter) => filterByNumericValuesState.remove(filter);

  const setOrder = (order) => orderState.set(order);

  const sortPlanets = useCallback(
    (data) => {
      if (!data.length) return [];
      const planetKey = orderState.get().column.toLowerCase().replace(' ', '_');
      if (isNaN(data[0][planetKey])) {
        data.sort((a, b) => (a[planetKey] > b[planetKey] ? 1 : -1));
      } else {
        data.sort((a, b) => a[planetKey] - b[planetKey]);
      }
      if (orderState.get().sort === 'DESC') data.reverse();
      return data;
    },
    [orderState],
  );

  const filterByNumericValues = useCallback(
    (data) =>
      filterByNumericValuesState.get().reduce(
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
    [filterByNumericValuesState],
  );

  const filterByName = useCallback(
    (data) =>
      data.filter((planet) =>
        planet.name.toLowerCase().includes(filterByNameState.get().toLowerCase()),
      ),
    [filterByNameState],
  );

  const allColumns = useMemo(
    () => [
      'name',
      'climate',
      'created',
      'diameter',
      'edited',
      'films',
      'gravity',
      'orbital_period',
      'population',
      'rotation_period',
      'surface_water',
      'terrain',
      'url',
    ],
    [],
  );

  return [
    {
      filterName: filterByNameState.get(),
      filtersNumber: filterByNumericValuesState.get(),
      order: orderState.get(),
      filterableColumns: filterableColumns.get(),
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
