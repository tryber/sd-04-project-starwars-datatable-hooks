import React, {useState} from 'react';
import useFilters from '../hooks/useFilters';

const getColumns = (columnSort, setColumnSort) => {
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
      onChange={(event) => setColumnSort(event)}
      data-testid="column-sort"
      value={columnSort}
    >
      {columns.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

const getRadios = (setInputSort) => {
  return (
    <div>
      <input
        defaultChecked
        data-testid="column-sort-input"
        type="radio"
        id="ASC"
        name="order"
        value="ASC"
        onChange={(event) => setInputSort(event)}
      />
      <label htmlFor="ASC">ASC</label>
      <input
        data-testid="column-sort-input"
        type="radio"
        id="DESC"
        name="order"
        value="DESC"
        onChange={(event) => setInputSort(event)}
      />
      <label htmlFor="DESC">DESC</label>
    </div>
  );
}

export default function FilterOrder() {
  const [columnSort, setColumnSort] = useState('Name');
  const [inputSort, setInputSort] = useState('ASC');
  const { setOrder } = useFilters();

  return (
    <div>
      {getColumns(columnSort, setColumnSort)}
      {getRadios(setInputSort)}
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={setOrder(columnSort, inputSort)}
      >
        Ordenar
      </button>
    </div>
  );
}
