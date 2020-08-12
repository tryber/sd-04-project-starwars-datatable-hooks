import React, { useState, useContext } from 'react';
import { PlanetsContext } from '../context';

export default function FilterValues() {
  const {
    setColumn,
    setComparison,
    setNumber,
    filterByNumericValues,
  } = useContext(PlanetsContext);
  const [col, setCol] = useState('');
  const [com, setCom] = useState('');
  const [num, setNum] = useState('');

  const onChange = (event, field) => {
    switch (field) {
      case 'column':
        setCol(event.target.value);
        break;
      case 'comparison':
        setCom(event.target.value);
        break;
      case 'number':
        setNum(event.target.value);
        break;
      default:
        return '';
    }
  };

  const onClick = () => {
    setColumn(col);
    setComparison(com);
    setNumber(num);
    setCol('');
    setCom('');
    setNum('');
  };

  const updateColumns = () => {
    let numericValues = filterByNumericValues;
    const columns = [
      '',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const chosenColumns = numericValues.map(({ cols }) => cols);
    return columns.filter((item) => !chosenColumns.includes(item));
  };

  const getColumns = () => {
    const select = updateColumns();
    return (
      <select
        data-testid="column-filter"
        value={col}
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
        value={com}
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

  return (
    <div>
      {getColumns()}
      {getComparison()}
      <input
        data-testid="value-filter"
        type="number"
        value={num}
        onChange={(event) => this.onChange(event, 'number')}
      />
      <button data-testid="button-filter" type="submit" onClick={onClick}>
        Filtrar
      </button>
    </div>
  );
}
