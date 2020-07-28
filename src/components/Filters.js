import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const comparison = { column: '', comparison: '', value: '' };

const renderFirstFilter = (filterKeys) => (
  <div>
    <select
      id="filtro-coluna"
      name="column"
      data-testid="column-filter"
      onChange={({ target: { value, name } }) => (comparison[name] = value)}
    >
      <option value="">Coluna</option>
      {filterKeys.map((op) => (
        <option key={op} value={op}>
          {op}
        </option>
      ))}
    </select>
  </div>
);

const renderSecondFilter = (filters, setFilters) => (
  <div>
    <select
      name="comparison"
      data-testid="comparison-filter"
      onChange={({ target: { value, name } }) => (comparison[name] = value)}
    >
      <option value="">Comparação</option>
      <option value="maior que">maior que</option>
      <option value="igual a">igual a</option>
      <option value="menor que">menor que</option>
    </select>
    <input
      type="number"
      name="value"
      data-testid="value-filter"
      onChange={({ target: { value, name } }) => (comparison[name] = value)}
    />
    <button
      type="button"
      data-testid="button-filter"
      onClick={() => setFilters({ ...filters, filterByNumericValues: [comparison] })}
    >
      Filtrar
    </button>
  </div>
);

const Filters = () => {
  const { filterKeys, filters, setFilters } = useContext(StarWarsContext);
  return (
    <div>
      {renderFirstFilter(filterKeys)}
      {renderSecondFilter(filters, setFilters)}
    </div>
  );
};

export default Filters;
