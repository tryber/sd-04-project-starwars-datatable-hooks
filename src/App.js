import React from 'react';
import './App.css';

import { starsWarsProvider } from './context/starWarsContext';

import Table from './components/Table';
import Search from './components/Search';
import ShowFilter from './components/ShowFilter';

function App() {
  return (
    <starsWarsProvider>
      <div>
        <Search />
        <ShowFilter />
        <hr />
        <Table />
      </div>
    </starsWarsProvider>
  );
}

export default App;
