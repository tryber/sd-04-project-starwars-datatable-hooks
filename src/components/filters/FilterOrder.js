import React, { useState, useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import { getRadios } from './getSelecters';

function FilterOrder() {
  const [columnSort, setColumnSort] = useState('Name');
  const [inputSort, setInputSort] = useState('ASC');
  const { orderColumns } = useContext(StarWarsContext);

  const onInputChange = (event) => setInputSort(event.target.value);

  const getColumns = () => {
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
        onChange={(event) => setColumnSort(event.target.value)}
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
  };

  return (
    <div>
      {getColumns()}
      {getRadios(onInputChange)}
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={() => orderColumns(columnSort, inputSort)}
      >
        Ordenar
      </button>
    </div>
  );
}

export default FilterOrder;
