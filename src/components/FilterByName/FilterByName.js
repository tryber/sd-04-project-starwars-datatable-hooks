import React, { useContext } from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { filterByName } from '../../actions';

import { StarWarsContext } from '../../context/StarWarsContext';

const FilterByName = () => {
  const context = useContext(StarWarsContext);

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={(e) => context.functions.filterByName(e.target.value)}
    />
  );
};

export default FilterByName;

// export default connect(null, { filterByName })(FilterByName);

// FilterByName.propTypes = {
//   filterByName: PropTypes.func.isRequired,
// };
