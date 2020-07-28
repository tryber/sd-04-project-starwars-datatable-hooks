import React from 'react';

const CreateInputValue = () => {
  return (
    <input
      style={{ width: '90px' }}
      // value={value}
      // onChange
      data-testid="value-filter"
      type="number"
      id="value"
    />
  );
};

export default CreateInputValue;
