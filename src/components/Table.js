import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

import CreateHeadings from '../components/CreateHeadings';
import CreateBody from '../components/CreateBody';

const Table = () => {
  const { data, isLoading, getPlanets } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanets();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <table>
        <CreateHeadings dados={Object.keys(data[0])} />
        <CreateBody dados={data} />
      </table>
    </div>
  );
};

export default Table;
