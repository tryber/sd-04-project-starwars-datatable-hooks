import React from 'react';
import columns from './columns';

export const getColumns = (changeCol, numberValues, column) => {
  const select = columns(numberValues);
  return (
    <select
      onChange={(e) => changeCol(e)}
      data-testid="column-filter"
      value={column}
    >
      {select.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export const getRadios = (mudarImput) => (
  <div>
    <input
      defaultChecked
      data-testid="column-sort-input-asc"
      type="radio"
      id="ASC"
      name="order"
      value="ASC"
      onChange={(e) => mudarImput(e)}
    />
    <label htmlFor="ASC">ASC</label>
    <input
      data-testid="column-sort-input-desc"
      type="radio"
      id="DESC"
      name="order"
      value="DESC"
      onChange={(e) => mudarImput(e)}
    />
    <label htmlFor="DESC">DESC</label>
  </div>
);

export const getComparar = (mudarComparar, comparar) => {
  const comparationValues = ['', 'maior que', 'menor que', 'igual a'];
  return (
    <select
      onChange={(e) => mudarComparar(e)}
      data-testid="comparison-filter"
      value={comparar}
    >
      {comparationValues.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
