import React from 'react';

import StarWarsContext from './context/StarWarsContext';
import './App.css';
import Table from './components/Table/Table';
import GetSWAPI from './components/GetSWAPI';
import FilterByName from './components/FilterByName/FilterByName';
import FilterByNumericValues from './components/FilterByNumericValues/FilterByNumericValues';
import NumericFilters from './components/NumericFilters/NumericFilters';
import Order from './components/Order/Order';

function App() {
  return (
    <div className="App">
      <StarWarsContext>
        <FilterByName />
        <FilterByNumericValues />
        <NumericFilters />
        <Order />
        <Table />
        <GetSWAPI />
      </StarWarsContext>
    </div>
  );
}

export default App;
