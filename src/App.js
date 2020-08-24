import React from 'react';
import StarWarsProvider from './context/Provider';
import ByName from './components/Filters/FilterByName';
import ByValue from './components/Filters/FilterByValue';
import Table from './components/Table';
import './App.css';

const App = () => {
  return (
    <StarWarsProvider>
      <ByName />
      <ByValue />
      <Table />
    </StarWarsProvider>
  );
};

export default App;
