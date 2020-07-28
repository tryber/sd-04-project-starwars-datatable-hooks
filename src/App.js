import React from 'react';
import Dashboard from './pages/Dashboard';
import StarWarsProvider from './context/StarWarsContext';
import './App.css';
// ToDo
function App() {
  return (
    <div className="App">
      <StarWarsProvider>
        <Dashboard />
      </StarWarsProvider>
    </div>
  );
}

export default App;
