import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useFilters from '../hooks/useFilters';
import { capitalize, removeUnderline } from '../utils/format';

import './Header.css';
import logo from '../assets/logo.png';

const Order = ({ columns, setOrder, order }) => {
  const [localOrder, setLocalOrder] = useState(order);
  return (
    <div>
      <h4 className="text-white">Sort by</h4>
      <div className="form-group">
        <select
          className="form-control"
          data-testid="column-sort"
          onChange={(e) => {
            const {
              target: { value },
            } = e;
            setLocalOrder((oldOrder) => ({ ...oldOrder, column: value }));
          }}
        >
          {columns.map((column) => (
            <option key={column}>{capitalize(removeUnderline(column))}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            id="ASC"
            name="sort"
            data-testid="column-sort-input-asc"
            type="radio"
            onClick={() => setLocalOrder((oldOrder) => ({ ...oldOrder, sort: 'ASC' }))}
            defaultChecked
          />
          <label htmlFor="ASC" className="form-check-label text-white">
            ASC
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            id="DESC"
            name="sort"
            data-testid="column-sort-input-desc"
            type="radio"
            onClick={() => setLocalOrder((oldOrder) => ({ ...oldOrder, sort: 'DESC' }))}
          />
          <label htmlFor="DESC" className="form-check-label text-white">
            DESC
          </label>
        </div>
      </div>
      <button
        className="btn btn-warning btn-block"
        data-testid="column-sort-button"
        type="button"
        onClick={() => setOrder(localOrder)}
      >
        Sort
      </button>
    </div>
  );
};

const NumericFilters = ({ filters, remove }) => (
  <div className="d-flex">
    <strong className="text-white">Filters: </strong>
    {filters.length ? (
      filters.map((filter) => (
        <span data-testid="filter" key={filter.id} className="badge badge-pill badge-warning mx-1">
          <div className="d-flex align-items-center">
            {capitalize(removeUnderline(filter.column))}{' '}
            {filter.comparison === 'maior que' ? '>' : filter.comparison === 'igual a' ? '=' : '<'}{' '}
            {filter.value}{' '}
            <span onClick={() => remove(filter)} className="btn badge badge-pill badge-light ml-1">
              X
            </span>
          </div>
        </span>
      ))
    ) : (
      <p className="mb-0 text-white">&nbsp;No filters applied</p>
    )}
  </div>
);

const FilterByName = ({ filterName, filter }) => (
  <div className="col-3">
    <div className="form-group">
      <input
        placeholder="Search for planet's name"
        className="form-control"
        data-testid="name-filter"
        value={filterName}
        onChange={(e) => filter(e.target.value)}
        type="text"
      />
    </div>
  </div>
);

const FilterByNumeric = ({ filter, columns }) => {
  const [numericFilter, setNumericFilter] = useState({});

  useEffect(() => {
    setNumericFilter((oldNumericFilter) => ({ ...oldNumericFilter, column: columns[0] }));
  }, [columns]);

  return (
    <div>
      <h4 className="text-white">Filter by</h4>
      <div className="form-group form-row">
        <div className="col">
          <select
            onChange={(e) => setNumericFilter({ ...numericFilter, column: e.target.value })}
            className="form-control"
            data-testid="column-filter"
            defaultValue=""
          >
            <option value="" disabled>
              Column
            </option>
            {columns.map((column) => (
              <option value={column} key={column}>
                {capitalize(removeUnderline(column))}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <select
            placeholder="Colune"
            onChange={(e) => setNumericFilter({ ...numericFilter, comparison: e.target.value })}
            className="form-control"
            data-testid="comparison-filter"
            defaultValue=""
          >
            <option value="" disabled>
              Comparison
            </option>
            <option value="maior que">Greater than</option>
            <option value="menor que">Less than</option>
            <option value="igual a">Equal to</option>
          </select>
        </div>
      </div>
      <div className="form-group form-row">
        <div className="col">
          <input
            placeholder="Value"
            className="form-control form-control-sm"
            data-testid="value-filter"
            onChange={(e) => setNumericFilter({ ...numericFilter, value: e.target.value })}
            type="number"
          />
        </div>
      </div>
      <button
        className="btn btn-warning btn-block"
        disabled={!numericFilter.value || !numericFilter.comparison || !numericFilter.column}
        data-testid="button-filter"
        type="button"
        onClick={() => {
          filter(numericFilter);
        }}
      >
        Filter
      </button>
    </div>
  );
};

export default function Header() {
  const [
    { filterName, filtersNumber, filterableColumns, order, allColumns },
    { setFilterName, addFilterNumber, removeFilterNumber, setOrder },
  ] = useFilters();

  return (
    <div className="row justify-content-center align-items-center header-background">
      <div className="jumbotron jumbotron-background">
        <div className="row justify-content-between align-items-center">
          <div className="col-4">
            <Order columns={allColumns} setOrder={setOrder} order={order} />
          </div>
          <div className="col-4 px-5">
            <img src={logo} width="100%" alt="" />
          </div>
          <div className="col-4">
            <FilterByNumeric filter={addFilterNumber} columns={filterableColumns} />
          </div>
        </div>
        <div className="row justify-content-center mt-5 mb-2">
          <FilterByName filterName={filterName} filter={setFilterName} />
        </div>
        <div className="row mb-3 justify-content-center">
          <NumericFilters filters={filtersNumber} remove={removeFilterNumber} />
        </div>
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
