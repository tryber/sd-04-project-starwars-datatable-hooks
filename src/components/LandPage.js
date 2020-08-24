import React, { useEffect, useContext } from 'react';
import Filter from '../Filter/Filter';
import Table from './Table';
import StarWarsContext from '../context/StarWarsContext';
import getPlanets from '../services/api';

const LandPage = () => {
  const { isFetching } = useContext(StarWarsContext);
  useEffect(() => {
    getPlanets();
  }, []);
  
  return (
    <div>
    {isFetching? <p>Loading...</p> :<Table />};
      <h1>StarWars Datatable with Filters</h1>
      <Filter />
    </div>
  );
}

export default LandPage;
