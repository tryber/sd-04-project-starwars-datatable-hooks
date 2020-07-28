import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from './Table';
import Search from './Search';
import Column from './Column';
import Comparative from './Comparative';
import InputValue from './InputValue';

const Home = () => {
  const states = useContext(StarWarsContext);
  const { isLoading } = states;

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <Search />
      <div>
        <Column />
        <Comparative />
        <InputValue />
      </div>
      <Table />
    </div>
  );
};

export default Home;
