import React, { useState, useEffect, useContext } from 'react';
import getPlanets from './services/api';
import './App.css';
import { Table } from './components/Table';

import Provider from './context/StarWarsContext';
import { StarWarsContext } from './context/StarWarsContext';

const axios = require('axios');

async function getApi() {
  return await getPlanets();
}

const App = () => {
  const context = useContext(StarWarsContext);
  const [planet, setPlanet] = useState([]);
  useEffect(() => {
    // axios
    //   .get('https://swapi-trybe.herokuapp.com/api/planets/')
    //   .then((res) => {
    //     console.log(res.data.results);
    //     setPlanet(res.data.results);
    //     // console.log('planets:', planet);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  }, []);

  // setPlanet(getApi());
  console.log('planets:', planet);
  console.log('context:', context);
  return (
    <Provider>
      <div className="App">
        <Table />
        <tr>{/* {planet.map((planet) => (
            <td>{planet.name}</td>
          ))} */}</tr>
      </div>
    </Provider>
  );
};

export default App;
