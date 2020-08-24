import React from 'react';
import PropTypes from 'prop-types';

function createOptions(item) {
  return (
    <option name={'column'} key={item} value={item}>
      {item}
    </option>
  );
}

function Select({ testid, value, name, onChange, children }) {
  return (
    <select
      data-testid={testid}
      value={value}
      name={name}
      onChange={(event) => {
        onChange(event);
      }}
    >
      {children.map(createOptions)}
    </select>
  );
}

export default Select;
Select.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};
