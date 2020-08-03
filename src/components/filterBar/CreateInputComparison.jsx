import React from 'react';
import PropTypes from 'prop-types';

const CreateInputComparison = ({ changeComparison, value }) => (
  <select
    value={value}
    onChange={(e) => changeComparison(e.target.value)}
    data-testid="comparison-filter"
    id="comparison"
  >
    <option value="">Comparison</option>
    <option value="maior que">maior que</option>
    <option value="igual a">igual a</option>
    <option value="menor que">menor que</option>
  </select>
);

CreateInputComparison.propTypes = {
  changeComparison: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

// CreateInputComparison.defaultProps = {
//   comparison: '',
// };

export default CreateInputComparison;
