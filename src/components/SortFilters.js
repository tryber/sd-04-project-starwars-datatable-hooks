import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const SortFilters = ({ headers }) => {
  const [localState, setLocalState] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const { sortFilters } = useContext(StarWarsContext);

  function getFilterInfo() {
    const { column, sort } = localState;
    sortFilters(column, sort);
  }

  function handleChange(e) {
    const { name, value } = e;
    setLocalState({ ...localState, [name]: value });
  }

  function renderOptions() {
    return (
      <form onChange={(e) => handleChange(e.target)} name="sort">
        <label htmlFor="ASC">ASC</label>
        <input
          data-testid="column-sort-input-asc"
          id="ASC"
          name="sort"
          type="radio"
          value="ASC"
          defaultChecked
        />
        <label htmlFor="DESC">DESC</label>
        <input
          data-testid="column-sort-input-desc"
          id="DESC"
          name="sort"
          type="radio"
          value="DESC"
        />
      </form>
    );
  }

  return (
    <div>
      <select
        data-testid="column-sort"
        name="column"
        onChange={(e) => handleChange(e.target)}
      >
        {headers.map((header) => (
          <option key={header} value={header}>
            {header}
          </option>
        ))}
      </select>
      <div>
        {renderOptions()}
        <button
          data-testid="column-sort-button"
          type="submit"
          onClick={(e) => getFilterInfo(e)}
        >
          Filtrar
        </button>
      </div>
    </div>
  );
};

SortFilters.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SortFilters;
