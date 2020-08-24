import React from 'react';
import PropTypes from 'prop-types';

function InputNumber({ name, value, testid, onChange, placeholder }) {
  return (
    <input
      type="number"
      data-testid={testid}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default InputNumber;

InputNumber.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
