import React from 'react';
import Table from './components/Table';
import usePlanets from './hooks/usePlanets';
import FilterByName from './components/FilterByName';
import FilterByNumericValues from './components/FilterByNumericValues';

export default function App() {
  const { isFetching } = usePlanets();
  if (isFetching) return <span className="home-loading">Loading...</span>;

  return (
    <div className="App">
      <h1 className="home-title">Star Wars DataTable</h1>
      <FilterByName />
      <FilterByNumericValues />
      <Table />
    </div>
  );
}
