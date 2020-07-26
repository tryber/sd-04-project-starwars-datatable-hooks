import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context';

function renderFilterDropdown(setVariables, setFilteredPlanets, filtersList) {
  const listOfColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const listOfComparisons = ['maior que', 'menor que', 'igual a'];
  const columns = filtersList.map((filter) => filter.column);

  return (
    <div>
      <h4>Definir filtro:</h4>
      <select data-testid="column-filter" id="column">
        <option defaultValue>Coluna</option>
        {listOfColumns
          .filter((col) => !columns.includes(col))
          .map((column) => (
            <option key={column} value={column}>
              {column}
            </option>
          ))}
      </select>
      <select data-testid="comparison-filter" id="comparison">
        <option defaultValue>Comparação</option>
        {listOfComparisons.map((comparison) => (
          <option key={comparison} value={comparison}>
            {comparison}
          </option>
        ))}
      </select>
      <input data-testid="value-filter" type="number" id="value" />
      <button
        data-testid="button-filter"
        type="button"
        onClick={() => {
          const newFilter = {
            column: document.querySelector('#column').value,
            comparison: document.querySelector('#comparison').value,
            value: document.querySelector('#value').value,
          };
          setVariables(newFilter);
          setFilteredPlanets();
        }}
      >
        Filtrar
      </button>
    </div>
  );
}

function renderFiltersSetted(filtersList, remove, setFilteredPlanets) {
  return (
    <div>
      <h4>Filtros:</h4>
      {filtersList.map((filter) => (
        <div key={filter.column} data-testid="filter">
          <p>{`${filter.column} ${filter.comparison} ${filter.value}`}</p>
          <button
            type="button"
            onClick={() => {
              remove(filter);
              setFilteredPlanets();
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}

function renderFiltersOrder(planetsData, setOrder, setFilteredPlanetsByOrder) {
  const columns = Object.keys(planetsData[0]);
  return (
    <div>
      <h4>Ordenar:</h4>
      <select data-testid="column-sort" id="column-sort">
        {columns
          .filter((title) => title !== 'residents')
          .map((title) => (
            <option key={title}>{title}</option>
          ))}
      </select>
      <input type="radio" id="ASC" name="column" data-testid="column-sort-input" value="ASC" />
      <label htmlFor="ASC">ASC</label>
      <input type="radio" id="DESC" name="column" data-testid="column-sort-input" value="DESC" />
      <label htmlFor="DESC">DESC</label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={() => {
          const selectedSort = document.querySelector('input[name="column"]:checked').value;
          const selectedColumn = document.querySelector('#column-sort').value;
          const order = {
            column: selectedColumn,
            sort: selectedSort,
          };
          setOrder(order);
          setFilteredPlanetsByOrder();
        }}
      >
        Filtrar
      </button>
    </div>
  );
}

export default function Header(props) {
  const { data, setData } = useContext(StarWarsContext);

  const {
    isFetching,
    planetsData,
    filteredPlanets,
    filterByName,
    filterByNumericValues,
    order,
  } = data;

  if (isFetching) return <p>Loading...</p>;
  return (
    <div>
      <h4>Procurar:</h4>
      <input
        data-testid="name-filter"
        type="text"
        onChange={(e) => {
          filterByName(e, planetsData);
        }}
      />
      {renderFiltersOrder(planetsData, setOrder, setFilteredPlanetsByOrder)}
      {renderFilterDropdown(setVariables, setFilteredPlanets, filterByNumericValues)}
      {renderFiltersSetted(filterByNumericValues, remove, setFilteredPlanets)}
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   filterByName: (e, data) => dispatch(filterPlanetsByName(data, e.target.value)),
//   setVariables: (filter) => dispatch(setNumericFilterVariables(filter)),
//   setFilteredPlanets: () => dispatch(setPlanetsFilteredByNumeric()),
//   remove: (filterToRemove) => dispatch(removeFilter(filterToRemove)),
//   setOrder: (order) => dispatch(setOrderFilter(order)),
//   setFilteredPlanetsByOrder: () => dispatch(setFilteredByOrder()),
// });
