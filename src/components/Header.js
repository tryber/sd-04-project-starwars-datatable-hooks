import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import Filters from './Filters';

const Header = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={({ target: { value } }) => {
          setFilters({ ...filters, filterByName: { ...filters.filterByName, name: value } } );
        }}
      />
      <Filters />
    </div>
  );
};

export default Header;
