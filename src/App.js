import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import SearchText from './components/SearchText';
import SelectColumn from './components/SelectColumn';
import DeleteFunction from './components/DeleteFilter';

const App = () => (
  <StarWarsProvider>
    <div className="App">
      <header className="App-header">
        <h2>StarWars Datatable with Filters</h2>
        <SearchText />
        <SelectColumn />
      </header>
      <DeleteFunction />
      <Table />
    </div>
  </StarWarsProvider>
);

export default App;