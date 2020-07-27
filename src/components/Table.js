import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import RenderTable from './RenderTable';

function Table() {
  const { isFetching, data, getPlanetsData, filters } = useContext(
    StarWarsContext,
  );

  // console.log(useContext(StarWarsContext));

  const isDataPresent = data.length > 0;

  useEffect(() => {
    getPlanetsData();
  }, [getPlanetsData]);

  const [name, setFilterName] = useState('');

  filters.filterByName.name = name;

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={(event) => setFilterName(event.target.value)}
      />
      {isFetching && 'Loading...'}
      {!isFetching && isDataPresent && <RenderTable />}
    </div>
  );
}

export default Table;
