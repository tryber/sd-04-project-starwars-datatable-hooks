import React from 'react';

import './App.css';

import { Provider } from './context/StarWarsContext';

import { Home } from './components/Home';

const App = () => (
  <Provider>
    <Home />
  </Provider>
);

export default App;
