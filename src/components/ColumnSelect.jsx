import React from 'react';
import { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function ColumnSelect() {
  const { handleChange } = useContext(StarWarsContext);
  const columns = ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        onChange={handleChange}
      >
        {columns.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
export default ColumnSelect;
