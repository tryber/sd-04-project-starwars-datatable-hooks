import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

// handleInputValue({ target: { value, name } }) {
//   this.setState({ [name]: String(value) });
// }

const comparison = { column: '', comparison: '', value: '' };

const renderFirstFilter = (filterKeys) => {
  // const { column } = this.state;
  // const { filterKeys } = this.props; // loadElementFilter
  return (
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
};

const renderSecondFilter = (filters, setFilters) => {
  // const { comparison, value } = this.state;
  // const { filterPlanets } = this.props; // Função do filtro.
  return (
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
};

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
