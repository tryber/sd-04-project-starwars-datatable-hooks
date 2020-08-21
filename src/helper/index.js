import React from 'react';
import { columns } from '../context/store';

// RENDERING FUNCS
export const renderHeader = (data) => {
  if (data) {
    const { residents, ...newData } = data;
    return Object.keys(newData).map((attr) => <th key={attr}>{attr}</th>);
  }
  return <p>NOTHING FOUND</p>;
};

export const renderTable = (data) => data.map((planet) => (
  <tr key={planet.name}>
    {Object.values(planet).map((attr) => (
      <td key={attr}>{attr}</td>
    ))}
  </tr>
));

export const renderCompSelect = (selected, handleChange) => (
  <React.Fragment>
    <label htmlFor="comparison-filter">Comparação:</label>
    <select
      id="comparison-filter"
      name="comparison"
      data-testid="comparison-filter"
      onChange={(event) => handleChange(event.target.value)}
      value={selected}
    >
      <option value="">-</option>
      <option value="maior que">maior que</option>
      <option value="igual a">igual a</option>
      <option value="menor que">menor que</option>
    </select>
  </React.Fragment>
);

export const renderColumnSelect = (selected, currentFilters, handleChange) => {
  let stateColumns;
  if (currentFilters.length >= 1) {
    stateColumns = currentFilters.map(({ column }) => column);
  } else {
    stateColumns = [];
  }
  const filteredColumns = columns.filter((option) => !stateColumns.includes(option));

  return (
    <React.Fragment>
      <label htmlFor="column-filter">Coluna:</label>
      <select
        id="column-filter"
        name="column"
        data-testid="column-filter"
        onChange={(event) => handleChange(event.target.value)}
        value={selected}
      >
        {filteredColumns.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export const renderRemoveBtn = (currentFilters, removeNumFilter) => currentFilters.map(
  ({ column, comparison, value }) => (
    <div data-testid="filter" key={column}>
      <span>{`${column} - ${comparison} - ${value} `}</span>
      <button
        type="button"
        name={column}
        onClick={(e) => {
          removeNumFilter(currentFilters.filter(({ column }) => column !== e.target.name));
        }}
      >
        X
      </button>
    </div>
  ),
);
// FILTER FUNCS
export const applyNameFilter = (planetName, data) => data.filter(
  (planet) => planet.name.toUpperCase().includes(planetName.toUpperCase()),
);

export const applyNumFilter = (filters, data) => {
  let newData;
  if (typeof filters && filters.length > 0) {
    filters.forEach(({ column, comparison, value }) => {
      newData = data.filter((currentPlanet) => {
        switch (comparison) {
          case 'menor que':
            return currentPlanet[column] < Number(value);
          case 'maior que':
            return currentPlanet[column] > Number(value);
          case 'igual a':
            return Number(currentPlanet[column]) === Number(value);
          default:
            return false;
        }
      });
    });
    return newData;
  }
  return data;
};
