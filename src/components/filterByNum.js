import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

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

const toGlobal = (column, comparison, value, set) => {
  set((data) => ({
    ...data,
    filterByNumericValues: [
      ...data.filterByNumericValues,
      { column, comparison, value },
    ],
  }));
};

function listComparisons() {
  const comparisons = ['', 'maior que', 'menor que', 'igual a'];
  return comparisons;
}

function makeColumnsSelect() {
  return listColumns().map((coluna) => (
    <option value={coluna} key={coluna}>
      {coluna}
    </option>
  ));
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

const FilterByNumeric = () => {
  const { setData } = useContext(StarWarsContext);
  const [localColumn, setLocalColumn] = useState('');
  const [localComparison, setLocalComparison] = useState('');
  const [inputNumber, setInputNumber] = useState('');

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={(event) => setLocalColumn(event.target.value)}
      >
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
        onClick={() =>
          toGlobal(localColumn, localComparison, inputNumber, setData)
        }
      >
        Filtrar
      </button>
    </div>
  );
};

export default FilterByNumeric;
