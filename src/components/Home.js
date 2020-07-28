import React from 'react';
import Table from './Table';
import FilterName from './FilterName';
import FilterValues from './FilterValues';

function Home() {
  return (
    <div>
      <FilterName />
      <FilterValues />
      <Table />
    </div>
  );
}

export default Home;
