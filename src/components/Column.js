import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Column = () => {
  const states = useContext(StarWarsContext);
  const { selectedFilters, filterByNumericValues } = states;
  const columns = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const arrayColumn = () => {
    if (filterByNumericValues.length === 0) return columns;
    const valuesUsed = filterByNumericValues.map(({ column }) => column);
    return columns.filter((value) => !valuesUsed.includes(value));
  };

  return (
    <div>
      <select
        onChange={selectedFilters}
        name="column"
        data-testid="column-filter"
        defaultValue="default"
      >
        <option value="default" disabled>Choose a Column</option>
        {arrayColumn().map((op) => <option key={op} value={op}>{op}</option>)}
      </select>
    </div>
  );
};

export default Column;
