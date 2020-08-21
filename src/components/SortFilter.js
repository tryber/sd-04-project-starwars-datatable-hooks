import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { SWcontext } from '../context/SWcontext.js';

function SortFilter({ keys }) {
  const { submitFilters } = useContext(SWcontext);
  const [localState, setLocalState] = useState({ column: 'name', sort: 'ASC' });
  function handleChange({ name, value }) {
    setLocalState({ ...localState, [name]: value });
  }

  function renderRadioButtons() {
    return (
      <div onChange={(e) => handleChange(e.target)} name="sort">
        <input
          data-testid="column-sort-input-asc"
          id="ASC"
          name="sort"
          type="radio"
          value="ASC"
          defaultChecked
        />
        <label htmlFor="ASC">ASC</label>
        <input
          data-testid="column-sort-input-desc"
          id="DESC"
          name="sort"
          type="radio"
          value="DESC"
        />
        <label htmlFor="DESC">DESC</label>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { column, sort } = localState;
    submitFilters(column, sort);
  }
  
  return (
    <div>
      <select onChange={(e) => handleChange(e.target)} data-testid="column-sort" name="column">
        {keys.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      {renderRadioButtons()}
      <button onClick={(e) => handleSubmit(e)} data-testid="column-sort-button" type="submit">
        Filtrar
      </button>
    </div>
  );
}

SortFilter.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SortFilter;