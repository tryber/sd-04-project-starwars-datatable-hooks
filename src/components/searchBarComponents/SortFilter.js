import React, { useState, useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function SortFilter() {
  const { setOrder } = useContext(StarWarsContext);
  const [column, setColumn] = useState('');
  const [sort, setSort] = useState('');

  const columnsList = ['name', 'climate', 'gravity', 'terrain', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  return (
    <div className="sortInput">
      <label htmlFor="select">Sort Columns</label>
      <br />
      <select
        data-testid="column-sort" name="select" className="input"
        onChange={(e) => setColumn(e.target.value)}
      >
        <option defaultValue>Column</option>
        {columnsList.map((columns) => (
          <option key={columns} value={columns}>{columns}</option>
        ))}
      </select>
      <br />
      <label htmlFor="sort">
        <input
          data-testid="column-sort-input" name="sort" type="radio"
          value="ASC" onChange={(e) => setSort(e.target.value)}
        />
        ASC
      </label>
      <label htmlFor="sort">
        <input
          data-testid="column-sort-input" name="sort" type="radio"
          value="DESC" onChange={(e) => setSort(e.target.value)}
        />
        DESC
      </label>
      <br />
      <button
        data-testid="column-sort-button" type="button"
        onClick={() => setOrder({ column, sort })}
      >
        Order
      </button>
    </div>
  );
}

export default SortFilter;
