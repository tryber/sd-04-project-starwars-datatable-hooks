import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByName() {
  const [text, setText] = useState('');
  const { filterByName } = useContext(StarWarsContext);

  const onChange = (event) => {
    setText(event.target.value);
    filterByName(event.target.value);
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Type a Planet Name"
        value={text}
        onChange={(event) => onChange(event)}
      />
    </div>
  );
}

export default FilterByName;
