import React from 'react';
import './App.css';
import Home from './components/Home';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWarsProvider>
          <Home />
        </StarWarsProvider>
      </header>
    </div>
  );
}

export default App;
