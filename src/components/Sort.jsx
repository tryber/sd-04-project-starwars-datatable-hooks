import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext.js';

const InputSort = () => {
  const [state, setState] = useState({
    column: 'Name',
    sort: 'ASC',
  });

  const changeState = (event) => {
    const { value, name } = event.target;
    setState((filterState) => ({
      ...filterState,
      [name]: value,
    }));
  };

  const { dataFiltered, setSort } = useContext(StarWarsContext);
  const columns = Object.keys(dataFiltered[0]);

  return (
    <div>
      <select data-testid="column-sort" name="column" onChange={(element) => changeState(element)}>
        {columns.map((value) => (
          <option key={value}>{value}</option>
        ))}
      </select>
      ASC
      <input
        ata-testid="column-sort-input-asc"
        type="radio"
        name="sort"
        value="ASC"
        onChange={(element) => changeState(element)}
      />
      DESC
      <input
        data-testid="column-sort-input-desc"
        type="radio"
        name="sort"
        value="DESC"
        onChange={(element) => changeState(element)}
      />
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={() => setSort(state.column, state.sort)}
      >
        Sort
      </button>
    </div>
  );
};

export default InputSort;
