import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const columns = [
  'name',
  'climate',
  'created',
  'diameter',
  'edited',
  'films',
  'gravity',
  'orbital_period',
  'population',
  'rotation_period',
  'surface_water',
  'terrain',
  'url',
];

const Order = () => {
  const {
    functions: { sortColumn },
  } = useContext(StarWarsContext);

  const [column, setColumn] = useState('name');
  const [sort, setSort] = useState('ASC');

  const renderSortInputs = () => (
    <div>
      <input
        data-testid="column-sort-input-asc"
        type="radio"
        name="order"
        value="ASC"
        id="ASC"
        onClick={(e) => setSort(e.target.value)}
      />
      <label htmlFor="ASC">ASC</label>
      <input
        data-testid="column-sort-input-desc"
        type="radio"
        name="order"
        value="DESC"
        id="DESC"
        onClick={(e) => setSort(e.target.value)}
      />
      <label htmlFor="DESC">DESC</label>
    </div>
  );

  return (
    <div className="order">
      <select data-testid="column-sort" onChange={(e) => setColumn(e.target.value)}>
        {columns.map((col) => (
          <option key={col}>{col}</option>
        ))}
      </select>
      {renderSortInputs()}
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={() => sortColumn(column, sort)}
      >
        order
      </button>
    </div>
  );
};

export default Order;
