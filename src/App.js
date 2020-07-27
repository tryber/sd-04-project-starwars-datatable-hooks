import React from 'react';
import Table from './components/Table';
import './App.css';
import { StarWarsProvider } from './context/StarWarsContext';

const App = () => {
  return (
    <StarWarsProvider>
      <div>
        <Table />
      </div>
    </StarWarsProvider>
  );
};

export default App;
