import React, { useContext } from 'react';
import SWContext from '../context/StarWarsContext';

const SearchBar = () => {
  const { handleSearchText } = useContext(SWContext);
  return (
    <div>
      <label>
        Pesquise o nome do planeta:
        <input
          data-testid="name-filter"
          type="text"
          onChange={(e) => handleSearchText(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBar;
