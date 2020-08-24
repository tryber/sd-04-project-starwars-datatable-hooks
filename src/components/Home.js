import React, { useContext, useEffect } from 'react';
import Table from './table/Table';
import { StarWarsContext } from '../context/StarWarsProvider';
import FilterBar from './filterBar/FilterBar';
import apiPlanets from '../services/fetchAPI';

const Home = () => {
  const { setPlanet, setFetching, isFetching } = useContext(StarWarsContext);

  useEffect(() => {
    apiPlanets()
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
