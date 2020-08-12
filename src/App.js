import React from 'react';
import Table from './components/Table';
import AppProvider from './context';
import Header from './components/Header';

const App = () => (
  <AppProvider>
    <Header />
    <Table />
  </AppProvider>
);

export default App;
