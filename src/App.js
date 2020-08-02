import React from 'react';
import './App.css';
import { StarWarsProvider } from './context/StarwarsProvider';
import Home from './components/Home';

function App() {
  return (
    <StarWarsProvider>
      <Home />
    </StarWarsProvider>
  );
}

export default App;
