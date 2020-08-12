import React, { useEffect, useContext } from 'react';
import Table from './Table';
import StarWarsContext from '../context/StarWarsContext';
import FilterByName from './FilterByName';
import FilterByNumeric from './FilterByNumeric';
import RemoveFilter from './RemoveFilter';
import OrderColumns from './OrderColumns';

function Home() {
  const { isFetching, fetchPlanets } = useContext(StarWarsContext);
  useEffect(() => {
    fetchPlanets();
  }, []);

  if (isFetching) return <h2>Loading...</h2>;
  return (
    <div>
      <h2>StarWars DataTable</h2>
      <FilterByName />
      <FilterByNumeric />
      <OrderColumns />
      <RemoveFilter />
      <Table />
    </div>
  );
}

export default Home;
