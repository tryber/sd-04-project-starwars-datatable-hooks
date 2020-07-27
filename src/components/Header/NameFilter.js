import PropTypes from 'prop-types';
import React from 'react';
import StarWarsContext from '../../context/StarWarsContext';


const NameFilter = () => {
  const {
    filters: {
      filterByName: {filterByName, setFilterByName},
    },
  } = React.useContext(StarWarsContext);
  return (
    <input
      data-testid="name-filter"
      type="text"
      value={filterByName}
      onChange={(e) => setFilterByName(e.target.value)}
    />
  );
};

export default NameFilter;
