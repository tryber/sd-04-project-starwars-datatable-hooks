import React, { useContext } from 'react';
// import Columns from './Columns';
// import Comparison from './Comparison';
// import Value from './Value';
import StartWarsContext from '../context/StarWarsContext';

function FilterValues() {
  const {
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    setNumericValues,
  } = useContext(StartWarsContext);

  function onClick() {
    setNumericValues(column, comparison, value);
  }

  function updateColumns() {
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

  function getColumns() {
    const select = updateColumns();
    return (
      <select
        data-testid="column-filter"
        value={column}
        onChange={(e) => setColumn(e.target.value)}
      >
        {select.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  function getComparation() {
    const comparation = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        data-testid="comparison-filter"
        value={comparison}
        onChange={(e) => setComparison(e.target.value)}
      >
        {comparation.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div>
      {getColumns()}
      {getComparation()}
      <input
        data-testid="value-filter"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button data-testid="button-filter" onClick={onClick()}>
        Filtrar
      </button>
    </div>
  );
}

export default FilterValues;
