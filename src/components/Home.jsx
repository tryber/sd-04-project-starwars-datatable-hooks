import React, { useContext, useEffect } from 'react';
import { Table } from './Table';
import { StarWarsContext } from '../context/StarWarsContext';

const axios = require('axios');

export const Home = () => {
  const { setPlanet, setFetching, isFetching } = useContext(StarWarsContext);

  useEffect(() => {
    axios
      .get('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((res) => {
        setPlanet(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <Table />
    </div>
  );
};
