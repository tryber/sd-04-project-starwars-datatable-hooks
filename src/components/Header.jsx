import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFilters from '../hooks/useFilters';

const Order = ({ columns, setOrder, order }) => {
  const [localOrder, setLocalOrder] = useState(order);
  return (
    <div className="col">
      <select
        data-testid="column-sort"
        onChange={(e) => {
          const {
            target: { value },
          } = e;
          setLocalOrder((oldOrder) => ({ ...oldOrder, column: value }));
        }}
      >
        {columns.map((column) => (
          <option key={column}>{column}</option>
        ))}
      </select>
      <div>
        <label htmlFor="ASC">
          ASC
          <input
            id="ASC"
            name="sort"
            data-testid="column-sort-input-asc"
            type="radio"
            onClick={() => setLocalOrder((oldOrder) => ({ ...oldOrder, sort: 'ASC' }))}
            defaultChecked
          />
        </label>
        <label htmlFor="DESC">
          DESC
          <input
            id="DESC"
            name="sort"
            data-testid="column-sort-input-desc"
            type="radio"
            onClick={() => setLocalOrder((oldOrder) => ({ ...oldOrder, sort: 'DESC' }))}
          />
        </label>
      </div>
      <button data-testid="column-sort-button" type="button" onClick={() => setOrder(localOrder)}>
        Ordenar
      </button>
    </div>
  );
};

const NumericFilters = ({ filters, remove }) => (
  <div className="col">
    <h2>Filtros</h2>
    <div>
      {filters.map((filter) => (
        <div data-testid="filter" key={filter.id}>
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

const FilterByNumeric = ({ filter, columns }) => {
  const [numericFilter, setNumericFilter] = useState({});

  useEffect(() => {
    setNumericFilter((oldNumericFilter) => ({ ...oldNumericFilter, column: columns[0] }));
  }, [columns]);

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
          {columns.map((column) => (
            <option value={column} key={column}>
              {column}
            </option>
          ))}
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
        onClick={() => {
          filter(numericFilter);
        }}
      >
        Filtrar
      </button>
    </div>
  );
};

export default function Header() {
  const [
    { filterName, filtersNumber, filterableColumns, allColumns, order },
    { setFilterName, addFilterNumber, removeFilterNumber, setOrder },
  ] = useFilters();

  return (
    <div className="jumbotron">
      <div className="row">
        <FilterByName filterName={filterName} filter={setFilterName} />
        <Order columns={allColumns} setOrder={setOrder} order={order} />
        <FilterByNumeric filter={addFilterNumber} columns={filterableColumns} />
        <NumericFilters filters={filtersNumber} remove={removeFilterNumber} />
      </div>
    </div>
  );
}

FilterByName.propTypes = {
  filter: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

FilterByNumeric.propTypes = {
  filter: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

NumericFilters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};

Order.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  setOrder: PropTypes.func.isRequired,
  order: PropTypes.shape({ column: PropTypes.string, sort: PropTypes.string }).isRequired,
};

