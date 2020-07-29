import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import FilterOrderSelect from './FilterOrderSelect';

const FilterOrder = () => {
  const [store, setStore] = useContext(StarWarsContext);
  const [column, setColumn] = useState('Name');
  const [sort, setSort] = useState('ASC');

  const tableHeaders = store.apiRequest.headers;

  const updateOrder = (state) => {
    setStore({
      ...store,
      filters: {
        ...store.filters,
        order: {
          ...store.filters.order,
          column: state.column,
          sort: state.sort,
        },
      },
    });
  };

  return (
    <div className="filter-order-container">
      <h3 className="caption">Order</h3>
      <div className="filter-order-inputs">
        <FilterOrderSelect
          column={column}
          setColumn={setColumn}
          tableHeaders={tableHeaders}
        />
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
