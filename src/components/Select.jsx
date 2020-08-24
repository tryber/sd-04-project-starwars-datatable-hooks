import React from 'react';

function createOptions(item) {
  return (
    <option name={'column'} key={item} value={item}>
      {item}
    </option>
 )
}

function Select({testid, value, name, onChange, children}) {
  return  <select
  data-testid={testid}
  value={value}
  name={name}
  onChange={(event) =>{ onChange(event)}}
>
  {children.map(createOptions)}
</select>
}

export default Select;
