import React from 'react';
import './App.css';
import { StarWarsProvider } from './context/StarWarsContext';
import UseData from './context/UseData';

function App() {
  return (
    <StarWarsProvider>
      <UseData />
    </StarWarsProvider>
  );
}

export default App;
