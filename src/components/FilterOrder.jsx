import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const FilterOrder = () => {
  const [store, setStore] = useContext(StarWarsContext);
  const [column, setColumn] = useState('Name');
  const [sort, setSort] = useState('ASC');

  const tableHeaders = store.apiRequest.headers;

  const updateOrder = ({ column, sort }) => {
    setStore({
      ...store,
      filters: {
        ...store.filters,
        order: { ...store.filters.order, column, sort },
      },
    });
  };

  return (
    <div className="filter-order-container">
      <h3 className="caption">Order</h3>
      <div className="filter-order-inputs">
        <select
          name="column"
          id="column"
          value={column}
          onChange={(event) => setColumn(event.target.value)}
          data-testid="column-sort"
        >
          {tableHeaders.map((item) => (
            <option
              key={item}
              value={item.charAt(0).toUpperCase() + item.slice(1)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </option>
          ))}
        </select>
        <label htmlFor="ASC" className="filter-order-radio-container">
          <input
            type="radio"
            id="ASC"
            value="ASC"
            name="order-type"
            defaultChecked
            onChange={(event) => setSort(event.target.value)}
            data-testid="column-sort-input-asc"
          />
          ASC
        </label>
        <label htmlFor="DESC" className="filter-order-radio-container">
          <input
            type="radio"
            id="DESC"
            value="DESC"
            name="order-type"
            onChange={(event) => setSort(event.target.value)}
            data-testid="column-sort-input-desc"
          />
          DESC
        </label>
      </div>
      <button
        type="button"
        onClick={() => updateOrder({ column, sort })}
        data-testid="column-sort-button"
        className="button"
      >
        Filter
      </button>
    </div>
  );
};

export default FilterOrder;
