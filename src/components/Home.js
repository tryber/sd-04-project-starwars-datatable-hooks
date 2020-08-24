import React, { useContext } from 'react';
import Filters from './Filters';
import Table from './Table';
import StarWarsContext from '../context/StarWarsContext';

const Home = () => {
  const { loading, data } = useContext(StarWarsContext);

  if (loading) return <h1>Loading...</h1>;
  console.log(data);
  // console.log(loading);
  return (
    <div>
      <h3>StarWars Datatable with Filters</h3>
      <Filters />
      <Table />
    </div>
  );
};

export default Home;
