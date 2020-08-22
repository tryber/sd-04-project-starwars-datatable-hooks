import React from 'react';
import Table from './components/Table';
import AppProvider from './context/index';
import Header from './components/Header';
import MakeFilterXButtons from './components/MakeFilterXButtons';

const App = () => (
  <AppProvider>
    <Header />
    <MakeFilterXButtons />
    <Table />
  </AppProvider>
);

export default App;
