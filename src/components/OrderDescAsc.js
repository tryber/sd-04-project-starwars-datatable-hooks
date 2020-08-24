import React from 'react';
import { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

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

const OrderDescAsc = () => {
  const { data, setData } = useContext(StarWarsContext);
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
        onChange={() => setOrder({ ...order, sort: 'ASC' })}
        defaultChecked
      />
      <label htmlFor="Asc">Asc</label>

      <input
        data-testid="column-sort-input-desc"
        type="radio"
        id="Desc"
        name="ordem"
        onChange={() => setOrder({ ...order, sort: 'DESC' })}
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

// Procopio salvou a minha vida me ajudando me dando uma força nesse requisito
export default OrderDescAsc;
