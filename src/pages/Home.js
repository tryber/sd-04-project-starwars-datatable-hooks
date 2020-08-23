import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import StarWarsContext from '../context/StarWarsContext';

function Home() {
  const { isLoading, fetchPlanets } = useContext(StarWarsContext);
  useEffect(() => {
    fetchPlanets();
  }, []);
  if (isLoading) return <h3> Loading...</h3>;
  return <Table />;
}

export default Home;
