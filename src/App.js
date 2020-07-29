import React from 'react';
import Header from './components/Header';
import FiltersPanel from './components/FiltersPanel';
import Table from './components/Table';
import { Store } from './context/StarWarsContext';

function App() {
  return (
    <Store>
      <div>
        <Header />
        <FiltersPanel />
        <Table />
      </div>
    </Store>
  );
}

export default App;
