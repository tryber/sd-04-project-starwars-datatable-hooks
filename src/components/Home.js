import React, { useContext, useEffect } from 'react';
import Table from './Table/Table';
import StarWarsContext from '../context/StarwarsContext';
import Filters from './filters/Filters';

function Home() {
  const { requestFetch, isFetching } = useContext(StarWarsContext);
  useEffect(() => {
    requestFetch();
  }, []);

  if (isFetching) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <Filters />
      <Table />
    </div>
  );
}

export default Home;
