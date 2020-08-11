import React, { useContext, useState } from 'react';
import PropTypes, { string } from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const RenderSelect = ({
  options, testId, name, handlerFunc,
}) => (
    <select
      onChange={(e) => handlerFunc(e)}
      data-testid={testId}
      name={name}
    >
      <option defaultChecked>{name}</option>
      {options.map((column) => (
        <option
          key={column}
          value={column}
        >
          {column}
        </option>
      ))}
    </select>
  );

const Filter = () => {
  const {
    filterByNumericValues, addFilter, columns, comparisons,
  } = useContext(StarWarsContext);

  const [localState, setLocalState] = useState({ column: '', comparison: '', value: '' });

  const handleChange = ({ name, value }) => setLocalState({ ...localState, [name]: value });

  function getFilterInfo(e) {
    e.preventDefault();
    if (localState.value !== undefined) {
      addFilter(localState);
      setLocalState([{ column: '', comparison: '', value: '' }]);
    }
  }

  function filterColumns(value) {
    let filteredColumns = [...columns];
    if (value.length > 0) {
      value.forEach(({ column }) => {
        filteredColumns = filteredColumns.filter((select) => select !== column);
      });
    }
    return filteredColumns;
  }

  const filteredColumns = filterColumns(filterByNumericValues);
  return (
    <div className="numeric-filter">
      <form onSubmit={(e) => getFilterInfo(e)}>
        <RenderSelect
          options={filteredColumns}
          testId="column-filter"
          name="column"
          handlerFunc={handleChange}
        />
        <RenderSelect
          options={comparisons}
          testId="comparison-filter"
          name="comparison"
          handlerFunc={handleChange}
        />
        <input
          onChange={(e) => handleChange(e)}
          data-testid="value-filter"
          name="value"
          type="number"
        />
        <button data-testid="button-filter" type="submit">Add Filter</button>
      </form>
    </div>
  );
};

RenderSelect.propTypes = {
  options: PropTypes.arrayOf(string).isRequired,
  testId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handlerFunc: PropTypes.func.isRequired,
};

export default Filter;
