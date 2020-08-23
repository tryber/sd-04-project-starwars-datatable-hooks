import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const OrderFilter = () => {
  const { data, order, setOrder } = useContext(StarWarsContext);
  const [sort, setSort] = useState('ASC');
  const [column, setColumn] = useState('name');

  const renderRadioButtons = () => {
    return (
      <div name="sort">
        <input
          data-testid="column-sort-input"
          name="order"
          type="radio"
          value="ASC"
          defaultChecked
          onClick={() => setSort('ASC')}
        />
        <label htmlFor="ASC">ASC</label>
        <input
          data-testid="column-sort-input"
          name="order"
          type="radio"
          value="DESC"
          onClick={() => setSort('DESC')}
        />
        <label htmlFor="DESC">DESC</label>
      </div>
    );
  };
  if (data === []) return <p>Loading Filter</p>;
  return (
    <div>
      <select
        onChange={(event) => setColumn(event.target.value)}
        data-testid="column-sort"
        name="column"
      >
        {Object.keys(data[0])
          .filter((header) => header !== 'residents')
          .map((columnHeader) => (
            <option key={columnHeader}>{columnHeader}</option>
          ))}
      </select>
      {renderRadioButtons()}
      <button
        type="button"
        onClick={() => setOrder({ order: { column: column, sort: sort } })}
        data-testid="column-sort-button"
      >
        Filter
      </button>
    </div>
  );
};

export default OrderFilter;
