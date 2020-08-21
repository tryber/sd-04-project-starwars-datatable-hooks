import React, { useContext, useState } from 'react';
import { SWContext } from '../context/SWcontext';
import ShowFilters from './ShowFilters';


function FilterForms() {
  const { submitFilterData, filterByNumericValues, options } = useContext(SWContext);
  const [localState, setLocalState] = useState({ column: '', comparison: '', number: '' });
  function handleChange({ name, value }) {
    setLocalState({ ...localState, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const { column, comparison, number } = localState;
    submitFilterData(column, comparison, number);
  }
  function filterOptions() {
    let newOptions = [...options];
    if (filterByNumericValues.length >= 1) {
      filterByNumericValues.forEach(({ column }) => {
        newOptions = newOptions.filter((option) => option !== column);
      });
    }
    return newOptions;
  }
  function renderSelect(newOptions, testId, name) {
    return (
      <select onChange={(e) => handleChange(e.target)} data-testid={testId} name={name}>
        <option defaultChecked>{name}</option>
        {newOptions.map((option) => (<option key={option} value={option}>{option}</option>))}
      </select>
    );
  }
  const newOptions = filterOptions();
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {renderSelect(newOptions, 'column-filter', 'column')}
        {renderSelect(['maior que', 'menor que', 'igual a'], 'comparison-filter', 'comparison')}
        <input
          onChange={(e) => handleChange(e.target)}
          data-testid="value-filter"
          type="number"
          name="number"
        />
        <button type="submit" data-testid="button-filter">acionar filtro</button>
      </form>
      <ShowFilters />
    </div>
  );
}

export default FilterForms;