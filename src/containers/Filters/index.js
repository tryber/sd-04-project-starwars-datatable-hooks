import React, { useContext } from 'react';
import FiltersContext from './FiltersContext';

const Filters = () => {
  const { filters, handleFilterByName } = useContext(FiltersContext);
  const { filterByName } = filters;
  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Search by Name"
        value={filterByName.name}
        onChange={(e) => handleFilterByName(e.target.value)}
      />
    </form>
  );
};

export default Filters;
