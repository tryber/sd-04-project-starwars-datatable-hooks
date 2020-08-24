import React from 'react';
import './App.css';
import Teste from './components/Teste';
import { StarWarsProvider } from './context/StarWarsContext';

const App = () => (
  <StarWarsProvider>
    <Teste />
  </StarWarsProvider>
);

export default App;
