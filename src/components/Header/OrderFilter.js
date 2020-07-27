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

const OrderFilter = () => {
  const {
    filters: {
      order: { submitOrder },
    },
  } = useContext(StarWarsContext);
  const [column, setColumn] = useState('');
  const [sort, setSort] = useState('');

  const handleOrderChange = (event, field) => {
    switch (field) {
      case 'column':
        setColumn(event.target.value);
        break;
      case 'sort':
        setSort(event.target.value);
        break;
      default:
        console.log('default');
    }
  };

  const renderRadio = () => (
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
        {renderRadio()}
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
