import React from 'react';
import PropTypes from 'prop-types';

const CreateInputComparison = ({ changeComparison, comparison }) => (
  <select
    value={comparison}
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
  comparison: PropTypes.string,
};

// CreateInputComparison.defaultProps = {
//   comparison: '',
// };

export default CreateInputComparison;
