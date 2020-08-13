import React, { useState, useContext } from 'react';
import { PlanetsContext } from '../context';

export default function FilterValues() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(
    PlanetsContext,
  );
  const [colum, setColumn] = useState('');
  const [compariso, setComparison] = useState('');
  const [number, setNumber] = useState('');

  const onChange = (event, field) => {
    switch (field) {
      case 'column':
        setColumn(event.target.value);
        break;
      case 'comparison':
        setComparison(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return null;
    }
    return null;
  };

  const updateColumns = () => {
    const columns = [
      ' ',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const chosenColumns = filterByNumericValues.map((it) => it.column);
    return columns.filter((item) => !chosenColumns.includes(item));
  };

  const getColumns = () => {
    const select = updateColumns();
    return (
      <select
        data-testid="column-filter"
        value={colum}
        onChange={(event) => onChange(event, 'column')}
      >
        {select.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  };

  const getComparison = () => {
    const comparison2 = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        data-testid="comparison-filter"
        value={compariso}
        onChange={(event) => onChange(event, 'comparison')}
      >
        {comparison2.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  };

  const onClick = () => {
    setFilterByNumericValues([
      {
        column: colum,
        comparison: compariso,
        value: number,
      },
    ]);
    setColumn('');
    setComparison('');
    setNumber('');
  };

  return (
    <div>
      {getColumns()}
      {getComparison()}
      <input
        data-testid="value-filter"
        type="number"
        value={number}
        onChange={(event) => onChange(event, 'number')}
      />
      <button data-testid="button-filter" type="submit" onClick={onClick}>
        Filtrar
      </button>
    </div>
  );
}
