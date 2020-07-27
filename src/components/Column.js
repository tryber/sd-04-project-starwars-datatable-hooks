import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Column = () => {
  const states = useContext(starWarsContext);

  return (
    <div>
      <select data-testid="column-filter">
        <option>Column</option>
      </select>
    </div>
  );
};

export default Column;
