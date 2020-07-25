import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFilters from '../hooks/useFilters';

const NumericFilters = ({ filters, remove }) => (
  <div className="col">
    <h2>Filtros</h2>
    <div>
      {filters.map((filter) => (
        <div data-testid="filter" key={filter.value}>
          {console.log(filter)}
          <p>{filter.column}</p>
          <p>{filter.comparison}</p>
          <p>{filter.value}</p>
          <button type="button" onClick={() => remove(filter)}>
            X
          </button>
        </div>
      ))}
    </div>
  </div>
);

const FilterByName = ({ filterName, filter }) => (
  <div className="col">
    <h2>Procurar</h2>
    <input
      data-testid="name-filter"
      value={filterName}
      onChange={(e) => filter(e.target.value)}
      type="text"
    />
  </div>
);

const FilterByNumeric = ({ filter }) => {
  const [numericFilter, setNumericFilter] = useState({});
  return (
    <div className="col">
      <div className="d-flex">
        <select
          onChange={(e) => setNumericFilter({ ...numericFilter, column: e.target.value })}
          className="w-50"
          data-testid="column-filter"
          defaultValue=""
        >
          <option value="" disabled>
            Coluna
          </option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          onChange={(e) => setNumericFilter({ ...numericFilter, comparison: e.target.value })}
          className="w-50"
          data-testid="comparison-filter"
          defaultValue=""
        >
          <option value="" disabled>
            Comparação
          </option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </div>
      <div className="d-flex">
        <input
          className="w-100"
          data-testid="value-filter"
          onChange={(e) => setNumericFilter({ ...numericFilter, value: e.target.value })}
          type="number"
        />
      </div>
      <button
        disabled={!numericFilter.value || !numericFilter.comparison || !numericFilter.column}
        data-testid="button-filter"
        type="button"
        onClick={() => filter(numericFilter)}
      >
        Filtrar
      </button>
    </div>
  );
};

export default function Header() {
  const [
    { filterName, filtersNumber },
    { setFilterName, addFilterNumber, removeFilterNumber },
  ] = useFilters();
  return (
    <div className="jumbotron">
      <div className="row">
        <FilterByName filterName={filterName} filter={setFilterName} />
        <FilterByNumeric filter={addFilterNumber} />
        <NumericFilters filters={filtersNumber} remove={removeFilterNumber} />
      </div>
    </div>
  );
}

FilterByName.propTypes = {
  filter: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};
