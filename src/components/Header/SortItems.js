import React, { useContext, useState } from 'react';
import { StarWarsContext, columns } from '../../context/store';

const SortItems = () => {
  const {
    order: {
      columnSort: [column, setColumnSort],
      sort: [sort, setSort],
    },
  } = useContext(StarWarsContext);
  const [localSort, setLocalSort] = useState(column);
  const [localColumn, setLocalColumn] = useState(sort);
  return (
    <div>
      <select
        data-testid="column-sort"
        name="columnSort"
        onChange={(event) => setLocalColumn(event.target.value)}
      >
        {columns.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <label htmlFor="sort">ASC</label>
      <input
        type="radio"
        data-testid="column-sort-input"
        name="sort"
        value="ASC"
        onClick={(event) => setLocalSort(event.target.value)}
      />
      <label htmlFor="sort">DESC</label>
      <input
        type="radio"
        data-testid="column-sort-input"
        name="sort"
        value="DESC"
        onClick={(event) => setLocalSort(event.target.value)}
      />
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={() => { setSort(localSort); setColumnSort(localColumn); }}
      >
        Sort
      </button>
    </div>
  );
};

export default SortItems;
