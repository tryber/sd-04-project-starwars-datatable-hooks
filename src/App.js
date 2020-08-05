import React from 'react';
import './styles/App.css';
import Table from './components/Table';
import Header from './components/Header';
import { StarWarsProvider } from './context/StarWarsContext';

const App = () => (
  <StarWarsProvider>
    <Header />
    <Table />
  </StarWarsProvider>
);

export default App;
