import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import ShowFilters from './ShowFilters';
import { StarWarsContext } from '../context/StarWarsContext';

function FilterForms() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     column: '',
  //     comparison: '',
  //     number: '',
  //   };
  //   this.filterOptions = this.filterOptions.bind(this);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  const { submitFilterData, filterByNumericValues, options } = useContext(StarWarsContext);
  const [localState, setLocalState] = useState({ column: '', comparison: '', number: '' });
  function handleChange({ name, value }) {
    setLocalState({ ...localState, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { column, comparison, number } = localState;
    // console.log(event.target.column.value);
    submitFilterData(column, comparison, number);
  }

  function filterOptions() {
    let newOptions = [...options];
    if (filterByNumericValues.length >= 1) {
      console.log('filterOptions called');
      filterByNumericValues.forEach(({ column }) => {
        newOptions = newOptions.filter((option) => option !== column);
      });
    }
    return newOptions;
  }

  function renderSelect(options, testId, name) {
    return (
      <select onChange={(e) => handleChange(e.target)} data-testid={testId} name={name}>
        <option defaultChecked>{name}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
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
        <button type="submit" data-testid="button-filter">
          acionar filtro
        </button>
      </form>
      <ShowFilters />
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   filterByNumericValues: state.filters.filterByNumericValues,
//   options: state.filters.options,
// });

// const mapDispatchToProps = (dispatch) => ({
//   submitFilterData: (column, comparison, number) =>
//     dispatch(saveFilterData(column, comparison, number)),
// });

// FilterForms.propTypes = {
// submitFilterData: PropTypes.func.isRequired,
// filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
// options: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default FilterForms;
