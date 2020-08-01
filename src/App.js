import React from 'react';
import { SWProvider } from './context/StarWarsContext';
import Home from './components/Home';

const App = () => (
  <SWProvider>
    <Home />
  </SWProvider>
);

export default App;
