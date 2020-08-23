import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const filterState = ['', '', ''];

const changeNumericFilter = (newFilter, filters, setFilters) => {
  setFilters({
    ...filters,
    filterByNumericValues: newFilter,
  });
};

const compileNumeric = (filters, columnCompare, setFilters, setColumn) => {
  const newColumns = columnCompare.filter((column) => column !== filterState[0]);
  const { filterByNumericValues } = filters;
  const newFilter = [];
  newFilter.push(...filterByNumericValues);
  newFilter.push({ column: filterState[0], comparison: filterState[1], value: filterState[2] });
  // console.log(newFilter);
  setColumn(newColumns);
  changeNumericFilter(newFilter, filters, setFilters);
};

const NumericFilter = () => {
  const { setFilters, filters, columnCompare, setColumn } = useContext(StarWarsContext);
  return (
    <div>
      Filtros:
      <select
        data-testid="column-filter"
        onChange={({ target: { value } }) => (filterState[0] = value)}
      >
        <option>Column</option>
        {columnCompare.map((column) => (
          <option key={column}>{column}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={({ target: { value } }) => (filterState[1] = value)}
      >
        <option>Comparison</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        placeholder="Valor"
        onChange={({ target: { value } }) => (filterState[2] = value)}
      />
      <button
        data-testid="button-filter"
        onClick={() => compileNumeric(filters, columnCompare, setFilters, setColumn)}
      >Compare</button>
    </div>
  );
};

export default NumericFilter;
