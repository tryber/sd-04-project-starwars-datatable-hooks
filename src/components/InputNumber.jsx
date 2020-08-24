import React from 'react';

function InputNumber({name, value, testid, onChange, placeholder}) {
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
