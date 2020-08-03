import React, { useContext, useEffect } from 'react';
import Table from './table/Table';
import { StarWarsContext } from '../context/StarWarsContext';
import FilterBar from './filterBar/FilterBar';
import getPlanets from '../services/api';

// const axios = require('axios');

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

    // axios
    //   .get('https://swapi-trybe.herokuapp.com/api/planets/')
    //   .then((res) => {
    //     setPlanet(res.data.results);
    //     setFetching(false);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //     setFetching(false);
    //   });
  }, []);

  return (
    <div>
      <FilterBar />
      {isFetching ? <h3>Loading...</h3> : <Table />}
    </div>
  );
};

export default Home;
