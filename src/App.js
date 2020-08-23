import React from 'react';
import './App.css';
import Table from './pages/Table';
import StoreProvider from './context/store';
import Header from './components/Header';

function App() {
  return (
    <StoreProvider>
      <Header />
      <Table />
    </StoreProvider>
  );
}

export default App;
