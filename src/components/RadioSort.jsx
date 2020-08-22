import React from 'react';
import { useContext, useState } from 'react';
import { AppContext } from '../context';

const colunas = [
  'Name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

const RadioSort = () => {
  const { data, setData } = useContext(AppContext);
  const [order, setOrder] = useState({ column: 'Name', sort: 'ASC' });
  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={(e) => {
          const {
            target: { value },
          } = e;
          setOrder({ ...order, column: value });
        }}
      >
        {colunas.map((coluna) => (
          <option key={coluna}>{coluna}</option>
        ))}
      </select>
      <input
        data-testid="column-sort-input-asc"
        type="radio"
        id="Asc"
        name="ordem"
        onChange={(e) => setOrder({ ...order, sort: 'ASC' })}
        defaultChecked
      />
      <label hatmlFor="Asc" for="male">
        Asc
      </label>

      <input
        data-testid="column-sort-input-desc"
        type="radio"
        id="Desc"
        name="ordem"
        onChange={(e) => setOrder({ ...order, sort: 'DESC' })}
      />
      <label htmlFor="Desc">Desc</label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={() => setData({ ...data, order })}
      >
        Ordenar
      </button>
    </div>
  );
};

export default RadioSort;
