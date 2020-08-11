import React, { useContext } from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';
import FiltersPanel from './FiltersPanel';
import SortFilters from './SortFilters';
import StarWarsContext from '../context/StarWarsContext';

const Header = () => {
  const { data } = useContext(StarWarsContext);

  return (
    <header>
      <SearchBar />
      <Filter />
      <FiltersPanel />
      <SortFilters headers={data.length > 0 ? Object.keys(data[0]) : []} />
    </header>
  );
};

export default Header;
