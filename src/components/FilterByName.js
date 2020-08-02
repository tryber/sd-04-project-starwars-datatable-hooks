import React, { useContext } from 'react';
import { StarsWarsContext } from '../context/StarWarsContext';

import './Table.css';

const FilterByName = () => {
  const { Input, getInput } = useContext(StarsWarsContext);
  return (
    <div>
      <label htmlFor="textName">Filter By name: </label>
      <input
        type="text"
        value={Input}
        name="textName"
        data-testid="name-filter"
        onChange={(e) => getInput(e.target.value)}
      />
    </div>
  );
};

export default FilterByName;
