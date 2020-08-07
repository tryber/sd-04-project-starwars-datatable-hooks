import React, { useContext } from 'react';
import { StoreContext } from '../utils/store';

const columnOption = [
  { value: '', text: 'Column' },
  { value: 'name', text: 'name' },
  { value: 'rotation_period', text: 'rotation_period' },
  { value: 'orbital_period', text: 'obital_period' },
  { value: 'diameter', text: 'diameter' },
  { value: 'climate', text: 'climate' },
  { value: 'gravity', text: 'gravity' },
  { value: 'terrain', text: 'terrain' },
  { value: 'surface_water', text: 'surface_water' },
  { value: 'population', text: 'population' },
  { value: 'created', text: 'created' },
  { value: 'edited', text: 'edited' },
];

const inputRadio = (value, handle, testid) => (
  <label htmlFor={value}>
    <input
      name="orderRatio"
      id={value}
      type="radio"
      data-testid={testid}
      value={value}
      onClick={(e) => handle(e)}
    />
    {value}
  </label>
);

const OrderFilter = () => {
  const { filters } = useContext(StoreContext);
  let column;
  let sort;
  const handleColumn = (e) => { column = e.target.value; };
  const handleSort = (e) => { sort = e.target.value; };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (column && sort) filters.setOrder({ column, sort });
      }}
    >
      <select onChange={(e) => handleColumn(e, column)} name="columnName" data-testid="column-sort">
        {columnOption.map(({ value, text }) =>
          <option key={value} value={value}>{text}</option>,
        )}
      </select>
      {inputRadio('ASC', handleSort, 'column-sort-input-asc')}
      {inputRadio('DESC', handleSort, 'column-sort-input-desc')}
      <button type="submit" data-testid="column-sort-button">Filtrar</button>
    </form>
  );
};

export default OrderFilter;

