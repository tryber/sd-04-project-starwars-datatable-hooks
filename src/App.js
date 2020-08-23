import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';
import FiltersProvider from './context/FiltersProvider';

// Layout do app StarWars
function App() {
  return (
    <Provider>
      <FiltersProvider>
        <Table />
      </FiltersProvider>
    </Provider>
  );
}

export default App;
