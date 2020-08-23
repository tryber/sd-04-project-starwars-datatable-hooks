import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const orderState = ['name', 'ASC'];

const putOrder = (filters, setFilters) => {
  setFilters({
    ...filters,
    order: {
      ...filters.order,
      column: orderState[0],
      sort: orderState[1],
    },
  });
};

const OrderFilter = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  return (
    <div>
      Order:
      <select
        data-testid="column-sort"
        onChange={({ target: { value } }) => (orderState[0] = value)}
      >
        <option>name</option>
        <option>orbital_period</option>
      </select>
      <input
        data-testid="column-sort-input-asc"
        type="radio"
        id="asc"
        name="order"
        value="ASC"
        onClick={({ target: { value } }) => (orderState[1] = value)}
      />
      <label htmlFor="asc">ASC</label>
      <input
        data-testid="column-sort-input-desc"
        type="radio"
        id="desc"
        name="order"
        value="DESC"
        onClick={({ target: { value } }) => (orderState[1] = value)}
      />
      <label htmlFor="desc">DESC</label>
      <button
        data-testid="column-sort-button"
        onClick={() => putOrder(filters, setFilters)}
      >
        Ordenar
      </button>
    </div>
  );
};

export default OrderFilter;
