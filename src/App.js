import React from 'react';
import { StarWarsProvider } from './context/StarWarsContext';
import Header from './componentes/Header';
import Table from './componentes/table';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
