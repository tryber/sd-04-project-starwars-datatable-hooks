import React from 'react';
import './App.css';
import { Provider } from './context/StarWarsContext';
import Table from './components/Table';
import Header from './components/Header';

const App = () => (
  <Provider>
    <div>
      <Header />
      <Table />
    </div>
  </Provider>
);

export default App;
