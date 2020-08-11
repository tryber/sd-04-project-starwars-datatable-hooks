import React from 'react';
import StarWarsContext from './context/StarWarsContext';
import {
  FilterByName,
  FilterByNumericValues,
  NumericFilters,
  Order,
  GetSWAPI,
  Table,
} from './components';
import './App.css';


function App() {
  return (
    <StarWarsContext>
      <div className="App">
        <FilterByName />
        <FilterByNumericValues />
        <NumericFilters />
        <Order />
        <Table />
        <GetSWAPI />
      </div>
    </StarWarsContext>
  );
}

export default App;
