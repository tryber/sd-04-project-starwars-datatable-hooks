import React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import { Store } from './context/StarWarsContext';

function App() {
  return (
    <Store>
      <div>
        <Header />
        <Table />
      </div>
    </Store>
  );
}

export default App;
