import React, { useEffect, useContext } from 'react';
import Table from './Table/Table';
import StarWarsContext from '../context/StarwarsContext';

function Home() {
  const { fetchPlanets, isFetching } = useContext(StarWarsContext);
  useEffect(() => {
    fetchPlanets();
  }, []);

  if (isFetching) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <Table />
    </div>
  );
}

export default Home;
