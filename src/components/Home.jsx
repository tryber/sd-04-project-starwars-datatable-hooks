import React, { useContext, useEffect } from 'react';
import { Table } from './table/Table';
import { StarWarsContext } from '../context/StarWarsContext';
import { FilterBar } from './filterBar/FilterBar';

const axios = require('axios');

export const Home = () => {
  const { setPlanet, setFetching, isFetching } = useContext(StarWarsContext);

  useEffect(() => {
    axios
      .get('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((res) => {
        setPlanet(res.data.results);
        setFetching();
      })
      .catch((err) => {
        console.log(err.message);
        setFetching();
      });
  }, []);

  return (
    <div>
      <FilterBar />
      {isFetching ? <h3>Loading...</h3> : <Table />}
    </div>
  );
};
