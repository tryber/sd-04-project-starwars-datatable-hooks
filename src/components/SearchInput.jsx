import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const SearchInput = () => {
  const { filterByName } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => filterByName(e.target.value)}
        data-testid="name-filter"
        placeholder="Search a Planet"
      />
      {/* {console.log(data)} */}
    </div>
  );
};

export default SearchInput;
