import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from './Table';

const Home = () => {
  const states = useContext(StarWarsContext);
  const { isLoading } = states;

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <Table />
    </div>
  );
};

export default Home;
