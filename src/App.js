import React from 'react';
import './App.css';
import Teste from './components/Teste';

const App = () => (
  <StarWarsProvider>
    <Teste />
  </StarWarsProvider>
);

export default App;
