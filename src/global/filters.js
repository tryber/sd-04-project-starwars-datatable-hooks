import { createState, useState } from '@hookstate/core';

const filterableColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const filterState = createState({
  filterByName: { name: '' },
  filterableColumns,
  filterByNumericValues: [],
  order: {
    column: 'name',
    sort: 'ASC',
  },
});

const wrapState = (s) => ({
  filterByName: {
    get: () => s.value.filterByName.name,
    set: (name) => s.set((oldS) => ({ ...oldS, filterByName: { name } })),
  },
  filterByNumericValues: {
    get: () => s.value.filterByNumericValues,
    add: (filter) =>
      s.set((oldS) => ({
        ...oldS,
        filterableColumns: oldS.filterableColumns.filter((column) => filter.column !== column),
        filterByNumericValues: [...oldS.filterByNumericValues, filter],
      })),
    remove: (filter) =>
      s.set((oldS) => ({
        ...oldS,
        filterableColumns: [...oldS.filterableColumns, filter.column],
        filterByNumericValues: oldS.filterByNumericValues.filter(
          (oldFilter) => oldFilter.id !== filter.id,
        ),
      })),
  },
  order: {
    get: () => s.value.order,
    set: (order) => s.set((oldS) => ({ ...oldS, order })),
  },
  filterableColumns: {
    get: () => s.value.filterableColumns,
  },
});

export const accessFilters = () => wrapState(filterState);
export const useFilters = () => wrapState(useState(filterState));
