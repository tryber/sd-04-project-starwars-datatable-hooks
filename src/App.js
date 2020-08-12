import React from 'react';
import Home from './components/Home';
import Provider from './context/Provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
