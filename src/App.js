import React from 'react';
import Home from './components/Home';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>      
  );
}

export default App;
