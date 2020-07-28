import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/starWarsContext';

const initialColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const filterColumns = (columnsInState) => {
  if (columnsInState.length === 0) return initialColumns;
  const usedColumns = columnsInState.map((numericFilter) => numericFilter.column);
  return initialColumns.filter((columnOption) => !usedColumns.includes(columnOption));
};

const FilterByComparison = () => {
  const { filterByNumericValues, filters } = useContext(StarWarsContext);

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  return (
    <form>
      <select data-testid="column-filter" onChange={(e) => setColumn(e.target.value)}>
        <option defaultValue>Selecione</option>
        {filterColumns(filters.filterByNumericValues).map((columns) => (
          <option key={columns}>{columns}</option>
        ))}
      </select>
      <select data-testid="comparison-filter" onChange={(e) => setComparison(e.target.value)}>
        <option defaultValue>Selecione</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input type="number" data-testid="value-filter" onChange={(e) => setValue(e.target.value)} />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => {
          filterByNumericValues(column, comparison, value);
        }}
      >
        Adicionar Filtro
      </button>
    </form>
  );
};

export default FilterByComparison;
