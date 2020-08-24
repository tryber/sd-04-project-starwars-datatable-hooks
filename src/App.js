import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import FilterByName from './components/FilterByName';
import FilterByNumericValues from './components/FilterByNumericValues';

export default function App() {
  return (
    <Provider>
      <div className="App">
        <h1 className="home-title">Star Wars DataTable</h1>
        <FilterByName />
        <FilterByNumericValues />
        <Table />
      </div>
    </Provider>
  )
}
