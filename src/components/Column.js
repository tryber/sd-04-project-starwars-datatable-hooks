import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Column = () => {
  const states = useContext(StarWarsContext);
  const { selectedFilters } = states;
  const column = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  return (
    <div>
      <select onChange={selectedFilters} name="column" data-testid="column-filter" defaultValue="default">
        <option value="default" disabled>Choose a Column</option>
        {column.map((op) => <option key={op} value={op}>{op}</option>)}
      </select>
    </div>
  );
};

export default Column;
