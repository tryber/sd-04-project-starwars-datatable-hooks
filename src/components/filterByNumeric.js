import React, { useState, useContext } from 'react';
import { AppContext } from '../context';

const goGlobal = (column, comparison, value, set) => {
  set((data) => ({
    ...data,
    filterByNumericValues: [...data.filterByNumericValues, { column, comparison, value }],
  }));
};

function listComparisons() {
  const comparisons = ['', 'maior que', 'menor que', 'igual a'];
  return comparisons;
}

function listColumns() {
  const columns = [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  return columns;
}

function makeComparisonSelect() {
  /* função baseada na aula do Orlando StarWars Redux */
  const select = listComparisons();
  return select.map((tagOption) => (
    <option value={tagOption} key={tagOption}>
      {tagOption}
    </option>
  ));
}

function makeColumnsSelect() {
  return listColumns().map((coluna) => (
    <option value={coluna} key={coluna}>
      {coluna}
    </option>
  ));
}

const FilterByNumeric = () => {
  const { setData } = useContext(AppContext);
  const [localColumn, setLocalColumn] = useState('');
  const [localComparison, setLocalComparison] = useState('');
  const [inputNumber, setInputNumber] = useState('');

  return (
    <div>
      <select data-testid="column-filter" onChange={(event) => setLocalColumn(event.target.value)}>
        {makeColumnsSelect()}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={(event) => setLocalComparison(event.target.value)}
      >
        {makeComparisonSelect()}
      </select>
      <input
        data-testid="value-filter"
        value={inputNumber}
        onChange={(event) => setInputNumber(event.target.value)}
      />
      <button
        data-testid="button-filter"
        onClick={() => goGlobal(localColumn, localComparison, inputNumber, setData)}
      >
        Filtrar
      </button>
    </div>
  );
};

export default FilterByNumeric;
