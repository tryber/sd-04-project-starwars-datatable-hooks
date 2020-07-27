import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import RenderTable from './RenderTable';

function Table() {
  const { isFetching, data, getPlanetsData } = useContext(StarWarsContext);

  const isDataPresent = data.length > 0;

  useEffect(() => {
    getPlanetsData();
  }, [getPlanetsData]);

  return (
    <div>
      {isFetching && 'Loading...'}
      {!isFetching && isDataPresent && <RenderTable />}
    </div>
  );
}

export default Table;
