import React, { useEffect, useContext } from 'react';
import Filter from '../Filter/Filter';
import Table from './Table';
import StarWarsContext from '../context/StarWarsContext';

function LandPage() {
  const { requestAPI, isFetching } = useContext(StarWarsContext);
  useEffect(() => {
    requestAPI();
  }, []);

  if (isFetching) return <p>Loading...</p>;

  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <Filter />
      <Table />
    </div>
  );
}

export default LandPage;
