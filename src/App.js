import React from 'react';
import './App.css';
import { Provider } from './context/StarWarsContext';
import Home from './components/Home';

const App = () => (
  <Provider>
    <section className="App">
      <Home />
    </section>
  </Provider>
);

export default App;
