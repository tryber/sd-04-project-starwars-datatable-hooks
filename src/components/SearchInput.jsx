import React, { useContext } from 'react';
import { SWContext } from '../context/SWContext';

const SearchInput = () => {
  const { name, getName } = useContext(SWContext);

  return (
    <div>
      <input
        value={name}
        onChange={getName}
        data-testid="name-filter"
        placeholder="Search a Planet"
      />
      {console.log(name)}
    </div>
  );
};

export default SearchInput;
