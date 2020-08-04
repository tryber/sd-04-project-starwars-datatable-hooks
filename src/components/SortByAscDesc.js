import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const listColumns = [
  'name',
  'climate',
  'gravity',
  'terrain',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const SortByAscDesc = () => {
  const { setOrder } = useContext(StarWarsContext);
  const [column, setColumn] = useState('Name');
  const [sort, setSort] = useState('ASC');

  const sortInput = (sortBy, tst) => (
    <label htmlFor="sort-input">
      <input
        data-testid={`column-sort-input-${tst}`}
        id="sort-input"
        type="radio"
        value={sortBy}
        onChange={(e) => setSort(e.target.value)}
      />
      {sortBy}
    </label>
  );

  return (
    <div>
      <select
        name="column-sort"
        data-testid="column-sort"
        defaultValue="DEFAULT"
        onChange={(e) => setColumn(e.target.value)}
      >
        <option value="DEFAULT" disable>
          Columns
        </option>
        {listColumns.map((column) => (
          <option key={column} value={column} name="column-sort">
            {column}
          </option>
        ))}
      </select>
      {sortInput('ASC', 'asc')}
      {sortInput('DESC', 'desc')}
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={() => setOrder({ column, sort })}
      >
        Ordernar
      </button>
    </div>
  );
};

export default SortByAscDesc;
