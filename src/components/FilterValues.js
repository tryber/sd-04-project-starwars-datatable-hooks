import React, { useContext, useState } from 'react';
// import Comparison from './Comparison';
// import Value from './Value';
import StartWarsContext from '../context/StarWarsContext';
import { buildColumns, buildComparison } from './builders';

function FilterValues() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const {
    filterByNumericValues,
    filters: { filterByNumericValues: numericValues },
  } = useContext(StartWarsContext);

  function onClick() {
    filterByNumericValues(column, comparison, value);
  }

  function changeColumn(e) {
    setColumn(e.target.value);
  }

  function changeComparison(e) {
    setComparison(e.target.value);
  }

  return (
    <div>
      {buildColumns(column, numericValues, changeColumn)}
      {buildComparison(comparison, changeComparison)}
      <input
        data-testid="value-filter"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button data-testid="button-filter" onClick={onClick}>
        Filtrar
      </button>
    </div>
  );
}

export default FilterValues;
