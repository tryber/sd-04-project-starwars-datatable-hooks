import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../../context/StarWarsContext';
import useFilters from '../../effect/useFilters';

function FilterByName() {
  const { setFirst } = useContext(StarWarsContext);
  const { filterByName } = useFilters();

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Pesquise um planeta"
        onChange={(event) => (
          setFirst(false), filterByName(event.target.value)
        )}
      />
    </div>
  );
}

export default FilterByName;

FilterByName.propTypes = {
  filterByName: PropTypes.func.isRequired,
};
