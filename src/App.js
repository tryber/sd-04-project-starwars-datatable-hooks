import React from 'react';
import Table from './components/Table';
import './App.css';
import { StarWarsProvider } from './context/StarWarsContext';

const App = () => (
  <StarWarsProvider>
    <div>
      <Table />
    </div>
  </StarWarsProvider>
);

export default App;
