import React from 'react';
import { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function ColumnSelect() {
  const {
    handleChange,
    filters: { filterByNumericValues },
  } = useContext(StarWarsContext);

  const col = ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const columns = () => {
    if (filterByNumericValues.lenght === 0) return col;
    const stateColumns = filterByNumericValues.map(({ column }) => column);
    return col.filter((column) => !stateColumns.includes(column));
  };

  return (
    <div>
      <select id="column" data-testid="column-filter" onChange={handleChange}>
        {columns().map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
export default ColumnSelect;
