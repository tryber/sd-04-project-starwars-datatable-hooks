import React, { useContext } from 'react';
import StoreProvider from '../utils/store';
import OrderFilter from './OrderFilter';

const NameFilter = () => {
  const { filters } = useContext(StoreProvider);
  return (
    <div>
      <input
        value={filters.filterByName}
        onChange={(e) => {
          filters.setFilterByName(e.target.value);
        }}
        type="text"
        data-testid="name-filter"
      />
    </div>
  );
};

const columnsOptions = [
  { value: '', text: 'Column' },
  { value: 'population', text: 'population' },
  { value: 'orbital_period', text: 'orbital_period' },
  { value: 'diameter', text: 'diameter' },
  { value: 'rotation_period', text: 'rotation_period' },
  { value: 'surface_water', text: 'surface_water' },
];

const comparisonOptions = [
  { value: '', text: 'Comparison' },
  { value: 'maior que', text: 'maior que' },
  { value: 'menor que', text: 'menor que' },
  { value: 'igual a', text: 'igual a' },
];

const Select = (options, testId) =>
  <select data-testid={testId} >
    {options.map(({ value, text }) =>
      <option key={value} value={value}>{text}</option>,
    )
    };
  </select>;

const NumericFilters = () => {
  const { filters } = useContext(StoreProvider);
  const filteredColumns = filters.filterByNumericValues.reduce((acc, cur) => {
    const { column } = cur;
    console.log(column);
    return (
      acc.filter((option) =>
        (option.value !== column),
      )
    );
  }, columnsOptions);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const filter = {
          column: e.target.children[0].value,
          comparison: e.target.children[1].value,
          value: e.target.children[2].value,
        };
        if (filter.column &&
          filter.comparison &&
          filter.value) {
          filters.setFilterByNumeric([...filters.filterByNumericValues, filter]);
        }
      }}
    >
      {Select(filteredColumns, 'column-filter')}
      {Select(comparisonOptions, 'comparison-filter')}
      <input type="number" data-testid="value-filter" />
      <button type="submit">Filtrar</button>
    </form>
  );
};

const Filters = () =>
  <div>
    {NameFilter()}
    {NumericFilters()}
    {OrderFilter()}
  </div>;

export default Filters;
