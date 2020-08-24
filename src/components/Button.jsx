import React from 'react';
import PropTypes from 'prop-types';

function Button({ testid, onClick, children }) {
  return (
    <button type="button" data-testid={testid} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};
