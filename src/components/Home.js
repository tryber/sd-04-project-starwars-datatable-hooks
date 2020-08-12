import React, { useContext } from 'react';
import { PlanetsContext } from '../context';
import Table from './Table';

export default function Home() {
  const { setFilterByName } = useContext(PlanetsContext);
  return (
    <div>
      <label htmlFor="pName">
        <input
          data-testid="name-filter"
          id="pName"
          type="text"
          placeholder="Nome do planeta"
          onChange={ (event) => setFilterByName({ name: event.target.value }) }
        />
      </label>
      <Table />
    </div>
  );
}
