import React from 'react';
import { StarWarsProvider } from './context/StarWarsContext';

import Table from './components/Table';

const App = () => (
  <StarWarsProvider>
    <Table />
  </StarWarsProvider>
);

export default App;
