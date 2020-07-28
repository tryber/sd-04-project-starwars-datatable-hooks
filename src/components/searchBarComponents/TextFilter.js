import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../../context/StarWarsContext';

function TextFilter() {
  const { setfilterByName } = useContext(StarWarsContext);
  return (
    <div className="textInput">
      <label htmlFor="search-text">
        Name Search:
        <br />
        <input
          className="input" type="text" data-testid="name-filter"
          onChange={(e) => setfilterByName({ name: e.target.value })}
        />
      </label>
    </div>
  );
}

export default TextFilter;

TextFilter.propTypes = {
  searchText: PropTypes.func.isRequired,
};
