import React from 'react';
import planetHeaders from '../../services/data';

const createButon = () => {
  return (
    <button className="btn btn-dark" data-testid="column-sort-button" type="button">
      Order
    </button>
  );
};

const createRadio = () => (
  <div>
    <label htmlFor="ASC">ASC</label>
    <input data-testid="column-sort-input-asc" name="sort" id="ASC" type="radio" />
    <label htmlFor="DESC">DESC</label>
    <input data-testid="column-sort-input-desc" name="sort" id="DESC" type="radio" />
  </div>
);

const FilterOrder = () => {
  return (
    <div>
      <h4>Filter by Order</h4>
      <select data-testid="column-sort" name="" id="">
        <option value="">Choose the Column</option>
        {planetHeaders.map((header) => (
          <option key={header} value={header}>
            {header}
          </option>
        ))}
      </select>
      {createRadio()}
      {createButon()}
    </div>
  );
};

export default FilterOrder;
