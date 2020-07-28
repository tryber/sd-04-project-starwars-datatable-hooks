import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <StarWarsProvider>
      <div className="App">
        <div className="header">
          <Header />
          <SearchBar />
        </div>
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
