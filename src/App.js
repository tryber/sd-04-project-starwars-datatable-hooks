import React from 'react';
import Table from './components/Table';
import { Provider } from './context/StarWarsContext';

const App = () => (
  <Provider>
    <Table />
  </Provider>
);

export default App;
