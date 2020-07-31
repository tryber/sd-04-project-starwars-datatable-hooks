import React from 'react';
import './css/bootstrap.min.css';
import './css/App.css';
import Table from './components/Table';
import Filters from './components/Filters';
import ShowFilters from './components/ShowFilters';

const App = () =>
  <div >
    <Filters />
    <ShowFilters />
    <Table />
  </div>;

export default App;
