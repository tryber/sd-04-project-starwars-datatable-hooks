import React, { useContext } from 'react';
import StoreProvider from '../utils/store';

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

const inputRadio = (value, handle) => (
  <label htmlFor={value}>
    <input
      name="orderRatio"
      id={value}
      type="radio"
      data-testid="column-sort-input"
      value={value}
      onClick={(e) => handle(e)}
    />
    {value}
  </label>
);

const OrderFilter = () => {
  const { filters } = useContext(StoreProvider);
  console.log(filters.order);
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
          <option value={value}>{text}</option>,
        )}
      </select>
      {inputRadio('ASC', handleSort)}
      {inputRadio('DESC', handleSort)}
      <button type="submit" data-testid="column-sort-button">Filtrar</button>
    </form>
  );
};

export default OrderFilter;

