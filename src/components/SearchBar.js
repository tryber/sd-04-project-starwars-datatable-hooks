import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { filterPlanetByName } from '../actions/filterPlanetByName';
import StarWarsContext from '../context/StarWarsContext';

const SearchBar = () => {
  const { filterByName: { name }, handleSearch } = useContext(StarWarsContext);

  return (
    <form>
      <div>
        <input
          data-testid="name-filter"
          value={name}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  value: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFilterPlanetByName: (name) => dispatch(filterPlanetByName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
