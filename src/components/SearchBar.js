import React, { useContext } from 'react';
import TextFilter from './searchBarComponents/TextFilter';
import SortFilter from './searchBarComponents/SortFilter';
import NumericFilter from './searchBarComponents/NumericFilter';
import StarWarsContext from '../context/StarWarsContext';

function SearchBar() {
  const { filters } = useContext(StarWarsContext);
  const NumericFilters = filters.filterByNumericValues;

  return (
    <div className="searchBar">
      <TextFilter />
      <SortFilter />
      <NumericFilter />
      <div>
        <div><h1>Filtros:</h1></div>
        <div>
          {NumericFilters.map((filter) => (
            <div data-testid="filter" className="filters">
              <p key={filter.value}>
                {filter.column} {filter.comparison} {filter.value}
              </p>
              {/* <button
                type="button"
                onClick={() => this.props.deleteFilter(filter.column)}
              >
                X
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
