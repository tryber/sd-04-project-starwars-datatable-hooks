import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNumeric() {
  const [column, setColumn] = useState('');
  const [comparation, setComparation] = useState('');
  const [number, setNumber] = useState('');

  const {
    filterByNumericValues,
    filters: { filterByNumericValues: numericValues },
  } = useContext(StarWarsContext);

  const onColumnChange = (event) => {
    setColumn(event.target.value);
  };

  const onComparationChange = (event) => {
    setComparation(event.target.value);
  };

  const onNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const onClick = () => {
    filterByNumericValues(column, comparation, number);
    setColumn('');
    setComparation('');
    setNumber('');
  };

  const updateColumns = () => {
    const columns = [
      '',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const stateColumns = numericValues.map(({ column }) => column);
    return columns.filter((option) => !stateColumns.includes(option));
  };

  const getColumns = () => {
    const select = updateColumns();
    return (
      <select
        onChange={(event) => onColumnChange(event)}
        data-testid="column-filter"
        value={column}
      >
        {select.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

  const getComparation = () => {
    const comparations = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        onChange={(event) => onComparationChange(event, 'comparation')}
        data-testid="comparison-filter"
        value={comparation}
      >
        {comparations.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div>
      {getColumns()}
      {getComparation()}
      <input
        type="number"
        data-testid="value-filter"
        value={number}
        onChange={(event) => onNumberChange(event)}
      />
      <button data-testid="button-filter" onClick={onClick}>
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumeric;
