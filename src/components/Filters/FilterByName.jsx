import React, { useContext } from 'react';

import StarWarsContext from '../../context/StarWarsContext';


const ByName = () => {
  const { handleSearch } = useContext(StarWarsContext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      placeholder="filter by name"
      onChange={(event) => handleSearch(event.target.value)}
    />
  );
};

export default ByName;
