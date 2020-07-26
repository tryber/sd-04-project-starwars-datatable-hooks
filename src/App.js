import React from 'react';
import './App.css';
import Table from './pages/Table';
import Header from './pages/Header';
import StarWarsProvider from './context';

function App() {
  return (
    <StarWarsProvider>
      <div>
        <Header />
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
