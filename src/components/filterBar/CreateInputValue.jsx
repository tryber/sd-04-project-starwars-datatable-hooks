import React from 'react';
import PropTypes from 'prop-types';

const CreateInputValue = ({ changeValue, value }) => (
  <input
    style={{ width: '90px', height: '22px' }}
    value={value}
    onChange={(e) => changeValue(e.target.value)}
    data-testid="value-filter"
    type="number"
    id="value"
  />
);

CreateInputValue.propTypes = {
  changeValue: PropTypes.func.isRequired,
  value: PropTypes.string,
};

// CreateInputValue.defaultProps = {
//   value: '',
// };

export default CreateInputValue;
