import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const comparisons = ['maior que', 'igual a', 'menor que'];

const Filter = () => {
  const { filterByNumericValues, addFilter, columns } = useContext(StarWarsContext);
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
  function renderSelect(filteredColumns, testId, name) {
    return (
      <select onChange={(e) => handleChange(e.target)} data-testid={testId} name={name}>
        <option defaultChecked>{name}</option>
        {filteredColumns.map((column) => (<option key={column} value={column}>{column}</option>))}
      </select>
    );
  }
  const filteredColumns = filterColumns(filterByNumericValues);
  return (
    <div className="numeric-filter">
      <form onSubmit={(e) => getFilterInfo(e)}>
        {renderSelect(filteredColumns, 'column-filter', 'column')}
        {renderSelect(comparisons, 'comparison-filter', 'comparison')}
        <input
          onChange={(e) => handleChange(e.target)}
          data-testid="value-filter"
          name="value"
          type="number"
        />
        <button data-testid="button-filter" type="submit">Add Filter</button>
      </form>
    </div>
  );
};

export default Filter;
