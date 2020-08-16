import React, { useState, useContext } from 'react';
import { AppContext } from '../context';

const goGlobal = (column, comparison, value, set) => {
  set((data) => ({
    ...data,
    filterByNumericValues: [
      ...data.filterByNumericValues,
      { column, comparison, value },
    ],
  }));
};

const FilterByNumeric = () => {
  const { data, setData } = useContext(AppContext);
  // const { filterByNumericValues } = data;
  const [localColumn, setLocalColumn] = useState('');
  const [localComparison, setLocalComparison] = useState('');
  const [inputNumber, setInputNumber] = useState('');

  function listComparisons() {
    const comparisons = ['', 'maior que', 'menor que', 'igual a'];
    return comparisons;
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

  return (
    <div>
      <select data-testid="column-filter" onChange={(event) => setLocalColumn(event.target.value)}>
        <option value=""></option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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
