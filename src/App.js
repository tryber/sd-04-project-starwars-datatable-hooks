import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <StarWarsProvider>
      <div className="App">
        <Home />
      </div>
    </StarWarsProvider>
  );
}

export default App;
