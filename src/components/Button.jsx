import React from 'react';

function Button({testid, onClick, children}) {
  return (
    <button type="button" data-testid={testid} onClick={onClick}>
     {children}
    </button>
  );
}

export default Button;
