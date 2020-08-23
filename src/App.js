import React from 'react';
import Provider from './context/Provider';
import usePlanets from './context/usePlanets';
import Table from './components/Table';
import FilterByName from './components/FilterByName';
import FilterByNumericValues from './components/FilterByNumericValues';

const App = () => (
  <Provider>
    <div className="App">
      <h1 className="home-title">Star Wars DataTable</h1>
      <FilterByName />
      <FilterByNumericValues />
      <Table />
    </div>
  </Provider>
);

export default App;
