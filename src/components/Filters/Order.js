import React, { useContext, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import sortFunc from '../functions/sortFunc';

const Order = () => {
  const { order, setOrder, data } = useContext(StarWarsContext);
  const [localState, setLocalState] = useState({
    column: 'Name',
    sort: 'ASC',
  });

  const handleChange = (event) => {
    setLocalState({ ...localState, [event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    const { column, sort } = localState;
    sortFunc(data, column, sort);
    setOrder({ column, sort });
  };
  const columns = ['Name', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  return (
    <div>
      <select
        name="column" data-testid="column-sort"
        value={order.column} onChange={(event) => handleChange(event)}
      >
        {columns.map((column) => (
          <option key={column} value={column}>{column}</option>
        ))}
      </select>
      <input
        type="radio" data-testid="column-sort-input-asc"
        name="sort" value="ASC" onClick={(event) => handleChange(event)}
      />
      <label htmlFor="sort">ASC</label>
      <input
        type="radio" data-testid="column-sort-input-desc"
        name="sort" value="DESC" onClick={(event) => handleChange(event)}
      />
      <label htmlFor="sort">DESC</label>
      <button type="button" data-testid="column-sort-button" onClick={() => handleSubmit()}>
        sort
      </button>
    </div>
  );
};

export default Order;
