import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

const SearchPlanet = () => {
  const { handleInput } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="search">
        Procurar
        <input
          data-testid="name-filter"
          type="text"
          name="search"
          onChange={(event) => {
            handleInput(event.target.value);
          }}
        />
      </label>
    </div>
  );
};

export default SearchPlanet;
