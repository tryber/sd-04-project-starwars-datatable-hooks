import React from 'react';
import './App.css';
import { PlanetsTable, Header } from './components';
import StarProvider from './context';

function App() {
  return (
    <StarProvider>
      <Header />
      <PlanetsTable />
    </StarProvider>
  );
}

export default App;
