import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import SearchText from './components/SearchText';

const App = () => (
  <StarWarsProvider>
    <div className="App">
      <header className="App-header">
        <h2>StarWars Datatable with Filters</h2>
        <SearchText />
      </header>
      <Table />
    </div>
  </StarWarsProvider>
);

export default App;
