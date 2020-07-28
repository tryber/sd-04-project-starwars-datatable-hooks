import React, { useState, useContext } from 'react';
import { getColumnsToSort, getRadiosAscDesc } from './Selects';
import StarWarsContext from '../context/StarWarsContext';

function OrderColumns() {
  const [column, setColumn] = useState('Name');
  const [order, setOrder] = useState('ASC');

  const { sortColumns } = useContext(StarWarsContext);

  const onColumnChange = (event) => {
    setColumn(event.target.value);
  };

  const onRadioChange = (event) => {
    setOrder(event.target.value);
  };

  const onclick = () => {
    sortColumns(column, order);
  };

  return (
    <div>
      {getColumnsToSort(onColumnChange, column)}
      {getRadiosAscDesc(onRadioChange)}
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={onclick}
      >
        Order
      </button>
    </div>
  );
}

export default OrderColumns;
