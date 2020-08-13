import React from 'react';
import './App.css';
import Table from './pages/Table';
import StarWarsContext from './context/StarWarsContext';
import Header from './components/Header';

function App() {
  return (
    <StarWarsContext.Provider>
      <Header />
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
