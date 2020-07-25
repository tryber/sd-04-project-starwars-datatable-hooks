import React from 'react';
import StarWarsProvider from './contexts/StarWarsContext.js'
import Table from './components/Table.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
