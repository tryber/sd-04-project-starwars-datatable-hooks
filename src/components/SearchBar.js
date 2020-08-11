import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const SearchBar = () => {
  const { filterByName: { name }, handleSearch } = useContext(StarWarsContext);

  return (
    <form>
      <div>
        <input
          data-testid="name-filter"
          value={name}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
