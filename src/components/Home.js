import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from './Table/Table';
import Filter from './Filter/Filter';

const Home = () => {
  const { isFetching, requestFetch } = useContext(StarWarsContext);
  useEffect(() => {
    requestFetch();
  }, []);

  if (isFetching) return <h1>Loading...</h1>;
  return(
    <div>
      <h1>StarWars Datatable With Filters</h1>
      <Filter />
      <Table />
    </div>
  );
};

export default Home;
