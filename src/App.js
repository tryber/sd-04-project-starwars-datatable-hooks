import React from 'react';

import './App.css';

import { Provider } from './context/StarWarsContext';

import { Home } from './components/Home';

const App = () => (
  <Provider>
    <div className="App">
      <section>
        <Home />
      </section>
    </div>
  </Provider>
);

export default App;
