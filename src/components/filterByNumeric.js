import React from 'react';
// import { AppContext } from '../context';

const filterByNumeric = () => (
  // const { data } = useContext(AppContext);
  // const { filterByNumericValues } = data;

  return (
    <div>
      <select data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diam eter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    </div>
  );
);

export default filterByNumeric;
