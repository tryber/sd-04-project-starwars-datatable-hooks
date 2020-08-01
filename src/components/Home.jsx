import React from 'react';
import Table from './Table';
import SearchInput from './SearchInput';
import NumericFilters from './NumericFIlters';

const Home = () => (
  <div>
    <h1>Star Wars DataBase</h1>
    <SearchInput />
    <NumericFilters />
    <Table />
  </div>
);

export default Home;
