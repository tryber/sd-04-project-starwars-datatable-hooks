import React from 'react';
import Table from './Table';
import usePlanets from '../hooks/usePlanets';
import FilterValues from './FilterValues';
import FilterPlanet from './FilterPlanet';
import FilterRemove from './FilterRemove';
import FilterOrder from './FilterOrder';

export default function Home() {
  const { isFetching } = usePlanets();
  if (isFetching) return <span className="home-loading">Loading...</span>;

  return (
    <div className="home">
      <h1 className="home-title">Star Wars DataTable</h1>
      <FilterPlanet />
      <FilterValues />
      <FilterRemove />
      <FilterOrder />
      <Table />
    </div>
  );
}
