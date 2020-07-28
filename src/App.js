import React from 'react';
import './App.css';

import Table from './components/Table';
import Search from './components/Search';
import ShowFilter from './components/ShowFilter';

import { StarWarsProvider } from './context/starWarsContext';

function App() {
  return (
    <StarWarsProvider>
      <div>
        <Search />
        <ShowFilter />
        <hr />
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
