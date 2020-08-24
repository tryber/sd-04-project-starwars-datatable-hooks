import React, { useContext, useEffect } from 'react';
import Table from './table/Table';
import { StarWarsContext } from '../context/StarWarsContext';
import FilterBar from './filterBar/FilterBar';
import getPlanets from '../services/api';

const Home = () => {
  const { setPlanet, setFetching, isFetching } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanets()
      .then((res) => {
        setPlanet(res.results);
        setFetching(false);
      })
      .catch((err) => {
        console.error(err);
        setFetching(false);
      });
  }, []);

  return (
    <div>
      <FilterBar />
      {isFetching ? <h3>Loading...</h3> : <Table />}
    </div>
  );
};

export default Home;
