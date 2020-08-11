import React, { useContext } from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';
import FiltersPanel from './FiltersPanel';
import SortFilters from './SortFilters';
import StarWarsContext from '../context/StarWarsContext';

const Header = () => {
  const { data } = useContext(StarWarsContext);

  let filteredData = [];

  if (data.length > 0) {
    filteredData = Object.keys(data[0]).filter((column) => column !== 'residents');
  }

  return (
    <header>
      <SearchBar />
      <Filter />
      <FiltersPanel />
      <SortFilters headers={filteredData} />
    </header>
  );
};

export default Header;
