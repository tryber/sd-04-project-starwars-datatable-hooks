import React from 'react';
import StarWarsProvider from './context/Provider';
import ByName from './components/Filters/FilterByName'
import Table from './components/Table';
import './App.css';

const App = () => {
  return (
    <StarWarsProvider>
      <ByName />
      <Table />
    </StarWarsProvider>
  );
};

export default App;
