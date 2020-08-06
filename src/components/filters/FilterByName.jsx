import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../../context/StarWarsContext';

function FilterByName() {
  const { filterByName } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Pesquise um planeta"
        onChange={(event) => filterByName(event.target.value)}
      />
    </div>
  );
}

export default FilterByName;

FilterByName.propTypes = {
  filterByName: PropTypes.func.isRequired,
};
