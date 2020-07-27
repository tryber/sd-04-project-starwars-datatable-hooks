import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

import CreateHeadings from '../components/CreateHeadings';
import CreateBody from '../components/CreateBody';

const filter = (data, name) => {
  let filteredData = [...data];
  if (name) return data.filter((planet) => planet.name.toUpperCase().includes(name.toUpperCase()));
  return filteredData;
};

const Table = () => {
  const { isLoading, data, name, getPlanets } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanets();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <table>
        <CreateHeadings dados={Object.keys(data[0])} />
        <CreateBody dados={filter(data, name)} />
      </table>
    </div>
  );
};

export default Table;
