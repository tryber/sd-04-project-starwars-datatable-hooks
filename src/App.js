import React from 'react';
import { Provider } from './context/StarWarsContext';
import Table from './components/Table/Table';
import Header from './components/Heads/Header';

const App = () => (
  <Provider>
    <Header />
    <br />
    <Table />
  </Provider>
);

export default App;
