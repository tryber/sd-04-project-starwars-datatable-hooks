import React from 'react';
import './App.css';
import { ProviderSW } from './context/StarWarsContext';
import Home from './components/Home';

const App = () => (
  <ProviderSW>
    <section className="App">
      <Home />
    </section>
  </ProviderSW>
);

export default App;
