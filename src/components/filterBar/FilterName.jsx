import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const FilterName = () => {
  const { filterName, changeFilterName } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="name">Filter by name</label>
      <input
        data-testid="name-filter"
        id="name"
        type="text"
        value={filterName}
        onChange={(e) => changeFilterName(e.target.value)}
      />
    </div>
  );
};
export default FilterName;
