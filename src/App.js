import React from 'react';
import StarWarsProvider from './context/Provider';
import ByName from './components/Filters/FilterByName';
import ByValue from './components/Filters/FilterByValue';
import Table from './components/Table';
import RemoveFilters from './components/Filters/RemoveFilters';
import Order from './components/Filters/Order';
import './App.css';

const App = () => {
  return (
    <StarWarsProvider>
      <ByName />
      <ByValue />
      <RemoveFilters />
      <Order />
      <Table />
    </StarWarsProvider>
  );
};

export default App;
