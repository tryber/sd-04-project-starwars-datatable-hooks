import React from 'react';
import Provider from './context/AppContext';
import Table from './components/Table';
import TableBody from './components/TableBody';
import RemoveFilter from './components/RemoveFilter';
import OrderDescAsc from './components/OrderDescAsc';

function App() {
  return (
    <Provider>
      <h1>Star Wars com Hooks que é melhor que Redux</h1>
      <OrderDescAsc />
      <RemoveFilter />
      <Table />
      <TableBody />
    </Provider>
  );
}

export default App;
