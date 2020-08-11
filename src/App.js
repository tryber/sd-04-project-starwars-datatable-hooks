import React from 'react';
import { Provider } from './context/index';
import Home from './components/Home';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
