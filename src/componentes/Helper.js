import React from 'react';

const filtrosOptions = (filtros) => {
  const values = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  if (filtros.filterByNumericValues.length > 0) {
    const filtrados = filtros.filterByNumericValues.map((e) => e.column);
    return values.filter((e) => !filtrados.includes(e));
  }
  return values;
};

export const selectedColumn = (filtros, setColumn) => {
  const values = filtrosOptions(filtros);
  return (
    <select
      onChange={(e) => setColumn(e.target.value)}
      data-testid="column-filter"
      name="dropdown-filter-category"
    >
      <option value="">--</option>
      {values.map((e) => (
        <option key={e} value={e}>
          {e}
        </option>
      ))}
    </select>
  );
};

export const filtrosFeitos = (filtros, deletFilter) => {
  if (filtros.filterByNumericValues.length > 0) {
    return filtros.filterByNumericValues.map((e, index) => (
      <span key={e.column} data-testid="filter">
        <p>{e.column}</p>
        <button onClick={() => deletFilter(index)} type="button" key={e.column}>
          X
        </button>
      </span>
    ));
  }
  return null;
};
