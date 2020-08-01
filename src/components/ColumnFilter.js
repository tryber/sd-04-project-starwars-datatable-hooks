import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const ColumnFilter = () => {
  const { column, setColumn, numericValues } = useContext(StarWarsContext);

  const planetFilters = () => {
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
        (option) => option !== element.column
      );
    });
    return planetFilters;
  };

  const planetOptions = planetFilters();

  return (
    <select
      data-testid="column-filter"
      value={column}
      onChange={(e) => setColumn(e.target.value)}
    >
      <option value=""></option>
      {planetOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ColumnFilter;
