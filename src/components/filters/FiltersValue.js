import React, { useState, useEffect, useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import updateColumn from './updateColumn';
import { getColumns, getComparation } from './getSelecters';

function FilterValue() {
  const [number, setNumber] = useState('');
  const [column, setColumn] = useState('');
  const [comparation, setComparation] = useState('');
  const {
    filterByNumericValues,
    filters: { filterByNumericValues: numericValues },
  } = useContext(StarWarsContext);

  useEffect(() => {
    updateColumn(numericValues);
  }, []);

  const onColumnChange = (event) => setColumn(event.target.value);
  const onComparationChange = (event) => setComparation(event.target.value);

  const onClick = () => {
    filterByNumericValues(column, comparation, number);
    setNumber('');
    setColumn('');
    setComparation('');
  };

  return (
    <div>
      {getColumns(onColumnChange, numericValues, column)}
      {getComparation(onComparationChange, comparation)}
      <input
        type="number"
        data-testid="value-filter"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button data-testid="button-filter" onClick={onClick}>
        Filtrar
      </button>
    </div>
  );
}

export default FilterValue;
