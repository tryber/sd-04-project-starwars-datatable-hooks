import React, { useContext } from 'react';
import FiltersContext from './FiltersContext';
import PlanetsContext from '../App/PlanetContext';

const columnFilterOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const handleNumericFilters = (filterByNumericValues) => {
  const column = document.querySelector('#column-selector').value;
  const comparison = document.querySelector('#comparison-selector').value;
  const number = document.querySelector('#value-input').value;

  if (column && comparison && number) {
    filterByNumericValues({
      column,
      comparison,
      value: number,
    });
  }
};

const handleSortFilters = (sortByColumn) => {
  const column = document.querySelector('#sort-column').value;
  const sortASC = document.querySelector('#sort-asc');

  if (column && sortASC) {
    sortByColumn({
      column,
      sort: sortASC.checked ? 'ASC' : 'DESC',
    });
  }
};

const renderColumnFilter = (selectedOptions) => (
  <select id="column-selector" data-testid="column-filter">
    <option value="vazio">vazio</option>
    {columnFilterOptions.map((avaibleOption) => {
      if (!selectedOptions.find((option) => option.column === avaibleOption)) {
        return <option value={avaibleOption}>{avaibleOption}</option>;
      }
    })}
  </select>
);

const renderSortFilters = (planets, sortByColumn) => (
  <form>
    <select data-testid="column-sort" id="sort-column">
      {Object.keys(planets.data[0]).map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
    <label htmlFor="sort-asc">ASC</label>
    <input
      ddata-testid="column-sort-input-asc"
      id="sort-asc"
      name="sort-order"
      type="radio"
      value="ASC"
      defaultChecked
    />
    <label htmlFor="sort-desc">DESC</label>
    <input
      data-testid="column-sort-input-desc"
      id="sort-desc"
      name="sort-order"
      type="radio"
      value="DESC"
    />
    <button
      type="button"
      data-testid="column-sort-button"
      onClick={() => handleSortFilters(sortByColumn)}
    >
      Filter
    </button>
  </form>
);

const Filters = () => {
  const {
    filters,
    handleFilterByName,
    handleFilterByNumber,
    handleFilterByOrder,
  } = useContext(FiltersContext);
  const { filterByName, filterByNumericValues } = filters;
  const { planets } = useContext(PlanetsContext);

  if (planets.planetsFetching) return null;

  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Search by Name"
          value={filterByName.name}
          onChange={(e) => handleFilterByName(e.target.value)}
        />
        {renderColumnFilter(filterByNumericValues)}
        <select id="comparison-selector" data-testid="comparison-filter">
          <option value="vazio">vazio</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" id="value-input" data-testid="value-filter" />
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => handleNumericFilters(handleFilterByNumber)}
        >
          Filter
        </button>
      </form>
      {renderSortFilters(planets, handleFilterByOrder)}
    </div>
  );
};

export default Filters;
