import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const ColumnOrder = () => {
  const { filters, setFilters, data } = useContext(StarWarsContext);
  const [orderState, setOrderState] = useState({
    column: 'Name',
    sort: 'ASC',
  });
  // const { column, sort } = orderState;
  const keys = data.length >= 1 ? Object.keys(data[0]) : [];
  const tableHeader = keys.filter((key) => key !== 'residents');

  function ascDesc() {
    return (
      <div>
        <label htmlFor="orderASC">
          ASC
          <input
            data-testid="column-sort-input-asc"
            id="orderASC"
            name="order"
            type="radio"
            value="ASC"
            onChange={(event) => setOrderState({ ...orderState, sort: event.target.value })}
          />
        </label>
        <label htmlFor="orderDESC">
          DESC
          <input
            data-testid="column-sort-input-desc"
            id="orderDESC"
            name="order"
            type="radio"
            value="DESC"
            onChange={(event) => setOrderState({ ...orderState, sort: event.target.value })}
          />
        </label>
      </div>
    );
  }

  return (
    <div>
      {/*
        Seleciona Coluna
      */}
      <select
        data-testid="column-sort"
        onChange={(event) => setOrderState({ ...orderState, column: event.target.value })}
      >
        {tableHeader.map((columns) => (
          <option key={columns} value={columns.toLowerCase()}>
            {columns}
          </option>
        ))}
      </select>
      {/*
        ASC e DESC
      */}
      {ascDesc()}
      {/*
        Botão Filtrar
      */}
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={() => setFilters({ ...filters, order: orderState.column, sort: orderState.sort })}
      >
        Filtrar
      </button>
    </div>
  );
};

export default ColumnOrder;
