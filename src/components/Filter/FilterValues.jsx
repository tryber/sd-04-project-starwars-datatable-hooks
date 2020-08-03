import React, { useEffect, useState,useContext } from 'react'
import StarWarsContext from '../../context/StarWarsContext';
import { updateColumns, getColumns, getComparation } from './Selectors';

function FilterValues() {
  const [number, setNumber] = useState('');
  const [column, setColumn] = useState('');
  const [comparation, setComparation] = useState('');
  const {
    filterByNumericValues,
    filters: { filterByNumericValues: numericValues },
  } = useContext(StarWarsContext);

  useEffect(() => {
    updateColumns(numericValues);
  }, []);

  const onNumberChange = (event) => setNumber(event.target.value);
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
        onChange={(event) => onNumberChange(event)}
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={onClick}
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterValues
