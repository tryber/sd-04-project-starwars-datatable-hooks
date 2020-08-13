import React, { useContext } from 'react';
import { PlanetsContext } from '../context';
import Table from './Table';
import FilterValues from './FilterValues';
import RemoveFilters from './RemoveFilters';
import Sort from './Sort';

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
          onChange={(event) => setFilterByName({ name: event.target.value })}
        />
      </label>
      <FilterValues />
      <Sort />
      <Table />
      <RemoveFilters />
    </div>
  );
}
