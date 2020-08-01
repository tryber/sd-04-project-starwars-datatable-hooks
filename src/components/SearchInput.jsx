import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const SearchInput = () => {
  const { nameFilter, setNameFilter } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        data-testid="name-filter"
        placeholder="Search a Planet"
      />
      {/* {console.log(data)} */}
    </div>
  );
};

export default SearchInput;
