import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Header from './components/Header';
import FilterXButton from './components/FilterXButton';

function App() {
  return (
    <Provider>
      <Header />
      <FilterXButton />
      <Table />
    </Provider>
  );
}

export default App;
