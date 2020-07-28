import React, { useContext } from 'react';
import { SWContext } from '../context/SWContext';

const SearchInput = () => {
  const { filterByName } = useContext(SWContext);

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
