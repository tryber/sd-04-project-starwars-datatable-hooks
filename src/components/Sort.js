import React, { useContext, useState } from 'react';
import { PlanetsContext } from '../context';

const options = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'residents',
  'films',
  'created',
  'edited',
];

const onChange = (value, setColumn, setSort) => {
  setColumn(value);
  setSort('ASC');
};

const radioButton = (value, setSort) => {
  setSort(value);
};

const onClick = (colum, sor, setOrder) => {
  setOrder(
    {
      column: colum,
      sort: sor,
    },
  );
};

export default function Sort() {
  const { setOrder } = useContext(PlanetsContext);
  const [colum, setColum] = useState(options);
  const [sor, setSor] = useState('');
  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={(e) => onChange(e.target.value, setColum, setSor)}
      >
        {options.map((ops) => (
          <option key={ops}>{ops}</option>
        ))}
      </select>
      <label htmlFor="ASC">
        ASC
        <input
          data-testid="column-sort-input-asc"
          id="ASC"
          name="sort"
          type="radio"
          value="ASC"
          onChange={() => radioButton('ASC', setSor)}
        />
      </label>
      <label htmlFor="DESC">
        DESC
        <input
          data-testid="column-sort-input-desc"
          id="DESC"
          name="sort"
          type="radio"
          value="DESC"
          onChange={() => radioButton('DESC', setSor)}
        />
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={() => onClick(colum, sor, setOrder)}
      >
        Filtrar
      </button>
    </div>
  );
}
