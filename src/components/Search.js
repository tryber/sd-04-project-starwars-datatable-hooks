import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Search = () => {
  const { handleCurrentData } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="search">
        Search
        <input data-testid="name-filter" id="search" type="text" onChange={handleCurrentData} />
      </label>
    </div>
  );
};

export default Search;
