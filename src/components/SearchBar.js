import React from 'react';
import TextFilter from './searchBarComponents/TextFilter';
import SortFilter from './searchBarComponents/SortFilter';
import NumericFilter from './searchBarComponents/NumericFilter';
import NumericFilterCard from './searchBarComponents/NumericFilterCard';

function SearchBar() {
  return (
    <div className="searchBar">
      <TextFilter />
      <SortFilter />
      <NumericFilter />
      <NumericFilterCard />
    </div>
  );
}

export default SearchBar;
