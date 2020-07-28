import React, { useContext, useEffect } from 'react';
import Table from './table/Table';
import { StarWarsContext } from '../context/StarWarsContext';
import FilterBar from './filterBar/FilterBar';

const axios = require('axios');

const Home = () => {
  const { setPlanet, setFetching, isFetching } = useContext(StarWarsContext);

  useEffect(() => {
    axios
      .get('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((res) => {
        setPlanet(res.data.results);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err.message);
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
