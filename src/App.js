import React from 'react';
import { SWProvider } from './context/SWContext';
import Home from './components/Home';

const App = () => (
  <SWProvider>
    <Home />
  </SWProvider>
);

export default App;
