import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import StarWarsContext from '../context/StarWarsContext';
import FilterName from '../components/FilterName';
import FilterValues from '../components/FilterValues';
import ListFilter from '../components/ListFilter';
import OrderValues from '../components/OrderValues';

function Home() {
  const { isLoading, fetchPlanets } = useContext(StarWarsContext);
  useEffect(() => {
    fetchPlanets();
  }, []);
  if (isLoading) return <h3> Loading...</h3>;
  return (
    <div>
      <FilterName />
      <FilterValues />
      <ListFilter />
      <OrderValues />
      <Table />
    </div>
  );
}

export default Home;
