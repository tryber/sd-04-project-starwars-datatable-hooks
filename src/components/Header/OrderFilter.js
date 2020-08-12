import React, { useState, useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const options = {
  column: [
    '',
    'Name',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ],
  comparison: ['', 'maior que', 'menor que', 'igual a'],
};

const renderRadio = (sort, handleOrderChange) => (
  <div>
    <label htmlFor="ASC">
      <input
        data-testid="column-sort-input-asc"
        type="radio"
        value="ASC"
        checked={sort === 'ASC'}
        onChange={(e) => handleOrderChange(e, 'sort')}
      />
      ASC
    </label>
    <label htmlFor="DESC">
      <input
        data-testid="column-sort-input-desc"
        type="radio"
        value="DESC"
        checked={sort === 'DESC'}
        onChange={(e) => handleOrderChange(e, 'sort')}
      />
      DESC
    </label>
  </div>
);

const OrderFilter = () => {
  const {
    filters: {
      order: { submitOrder },
    },
  } = useContext(StarWarsContext);
  const [column, setColumn] = useState('');
  const [sort, setSort] = useState('');

  const handleOrderChange = (event, field) => {
    if (field === 'column') {
      return setColumn(event.target.value);
    }
    return setSort(event.target.value);
  };
  return (
    <div>
      <form id="orderFilter" onSubmit={(e) => submitOrder(e, sort, column)}>
        <select
          data-testid="column-sort"
          value={column}
          onChange={(e) => handleOrderChange(e, 'column')}
        >
          {options.column.map((elem) => (
            <option key={elem} name="column-order" value={elem}>
              {elem}
            </option>
          ))}
        </select>
        {renderRadio(sort, handleOrderChange)}
        <button
          type="submit"
          form="orderFilter"
          data-testid="column-sort-button"
        >
          Ordenar
        </button>
      </form>
    </div>
  );
};

export default OrderFilter;
