import React from 'react';
import TextFilter from './searchBarComponents/TextFilter';
// import SortFilter from './searchBarComponents/SortFilter';
// import NumericFilter from './searchBarComponents/NumericFilter';

function SearchBar() {
  return (
    <div className="searchBar">
      <TextFilter />
      <div>
        <div><h1>Filtros:</h1></div>
        {/* <div>
          {filters.map((filter) => (
            <div data-testid="filter" className="filters">
              <p key={filter.value}>
                {filter.column} {filter.comparison} {filter.value}
              </p>
              <button
                type="button"
                onClick={() => this.props.deleteFilter(filter.column)}
              >
                X
              </button>
            </div>
          ))}
          </div> */}
      </div>
    </div>
  );
}

export default SearchBar;
