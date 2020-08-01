import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const ColumnFilter = () => {
  const { column, setColumn, numericValues } = useContext(StarWarsContext);

  const planetsFilters = () => {
    const planetOptions = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    let planetFilters = planetOptions;
    numericValues.forEach((element) => {
      planetFilters = planetFilters.filter(
        (option) => option !== element.column,
      );
    });
    return planetFilters;
  };

  const planetOptions = planetsFilters();

  return (
    <select
      data-testid="column-filter"
      value={column}
      onChange={(e) => setColumn(e.target.value)}
    >
      <option value="" />
      {planetOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ColumnFilter;
