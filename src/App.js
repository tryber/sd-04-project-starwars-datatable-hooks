import React from 'react';

import './App.css';
import Table from './components/Table/Table';
import GetSWAPI from './components/GetSWAPI';
import FilterByName from './components/FilterByName/FilterByName';
import FilterByNumericValues from './components/FilterByNumericValues/FilterByNumericValues';
import NumericFilters from './components/NumericFilters/NumericFilters';
import Order from './components/Order/Order';

import StarWarsContext from './context/StarWarsContext';

function App() {
  return (
    <StarWarsContext>
      <div className="App">
        <FilterByName />
        {/* <FilterByNumericValues />
        <NumericFilters />
        <Order /> */}
        <Table />
        <GetSWAPI />
      </div>
    </StarWarsContext>
  );
}

export default App;
