import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Order() {
  const [columnSort, setColumnSort] = useState('Name');
  const [inputSort, setInputSort] = useState('ASC');
  const { orderColumns } = useContext(StarWarsContext);

  const searchChange = (event) => setInputSort(event.target.value);
  const onOrderChange = (event) => setColumnSort(event.target.value);
  const onClick = () => orderColumns(columnSort, inputSort);

  getColumns = () => {
    const columns = [
      'Name',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    return (
      <select
        className='select is-info'
        onChange={(event) => onOrderChange(event, 'columnSort')}
        data-testid='column-sort'
        value={columnSort}
      >
        {columns.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))};
      </select>
    );
  };

  getRadios = () => {
    return (
      <div>
        <input
          defaultChecked
          data-testid='column-sort-input'
          type='radio'
          id='ASC'
          name='order'
          value='ASC'
          onChange={(event) => onOrderChange(event, 'inputSort')}
        />
        <label htmlFor='ASC'>ASC</label>
        <input
          data-testid='column-sort-input'
          type='radio'
          id='DESC'
          name='order'
          value='DESC'
          onChange={(event) => onOrderChange(event, 'inputSort')}
        />
        <label htmlFor='DESC'>DESC</label>
      </div>
    );
  };

  return (
    <div>
      <div>
        {getColumns()}
        {getRadios(searchChange)}
        <button
          data-testid='column-sort-button'
          type='button'
          onClick={onClick}
        >
          Ordenar
        </button>
      </div>
    </div>
  );
}

export default Order;
