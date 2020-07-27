import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { StarWarsContext } from '../context/StarWarsContext';

const ShowFilters = () => {
  const { filterByNumericValues, removeFilter } = useContext(StarWarsContext);
  if (filterByNumericValues.length >= 1) {
    return (
      <div>
        Filters
        <ul>
          {filterByNumericValues.map(({ column, comparison, value }) => (
            <li key={column} data-testid="filter">
              {`${column} ${comparison} ${value} `}
              <button type="button" onClick={() => removeFilter(column)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <div />;
};

// const mapStateToProps = (state) => ({
//   filterByNumericValues: state.filters.filterByNumericValues,
// });

// const mapDispatchToProps = (dispatch) => ({
//   removeFilter: (column) => dispatch(remove(column)),
// });

// ShowFilters.propTypes = {
// filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
// removeFilter: PropTypes.func.isRequired,
// };

export default ShowFilters;
