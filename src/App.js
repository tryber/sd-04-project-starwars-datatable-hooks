import React from 'react';
import Table from './components/Table';
import usePlanets from './hooks/usePlanets';

export default function App() {
  const { isFetching } = usePlanets();
  if (isFetching) return <span className="home-loading">Loading...</span>;

  return (
    <div className="App">
      <h1 className="home-title">Star Wars DataTable</h1>
      <Table />
    </div>
  );
}
