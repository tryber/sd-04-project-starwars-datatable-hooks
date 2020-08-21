import React from 'react';

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

export const renderCompSelect = (comparison, callback) => (
  <React.Fragment>
    <label htmlFor="comparison-filter">Comparação:</label>
    <select
      id="comparison-filter"
      name="comparison"
      data-testid="comparison-filter"
      onChange={(event) => callback(event)}
      value={comparison}
    >
      <option value="">-</option>
      <option value="maior que">maior que</option>
      <option value="igual a">igual a</option>
      <option value="menor que">menor que</option>
    </select>
  </React.Fragment>
);

export const renderColumnSelect = (column, handleChange) =>
  // const { currentFilters } = this.props; -> implement this state in store
  // const stateColumns = currentFilters.map(({ column }) => column);
  //    -> creates array of columns to exclude from columns array
  // const filteredColumns = columns.filter(option => !stateColumns.includes(option));
  //    -> creates array to generate available options left
  (
    <React.Fragment>
      <label htmlFor="column-filter">Coluna:</label>
      <select
        id="column-filter"
        name="column"
        data-testid="column-filter"
        onChange={(event) => handleChange(event)}
        value={column}
      >
        {filteredColumns.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </React.Fragment>
  );

// FILTER FUNCS
export const applyNameFilter = (planetName, data) => data.filter(
  (planet) => planet.name.toUpperCase().includes(planetName.toUpperCase()),
);
