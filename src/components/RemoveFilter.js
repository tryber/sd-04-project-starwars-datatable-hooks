import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const RemoveFilter = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;
  const handleOnClick = (itemFilter) => {
    const filtered = filterByNumericValues.filter((item) => item !== itemFilter);
    setFilters({ ...filters, filterByNumericValues: filtered });
  };
  return (
    <div>
      Filtros utilizados:
      <div>
        {filterByNumericValues.map((item) => (
          <div key={`${item.value}`} data-testid="filter">
            <p>{`${item.column} - ${item.comparison} - ${item.value}`}</p>
            <button type="button" onClick={() => handleOnClick(item)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemoveFilter;

/* import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFilter } from '../actions';

function RemoveFilter({ numericValues, removeFilterX }) {
  const handleOnClick = (item) => removeFilterX(item);

  return (
    <div>
      Filtros utilizados:
      <div>
        {numericValues.map((item) => (
          <div key={item.value} data-testid="filter">
            <p>{`${item.column} - ${item.comparison} - ${item.value}`}</p>
            <button type="button" onClick={() => handleOnClick(item)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

RemoveFilter.propTypes = {
  numericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFilterX: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeFilterX: (filtered) => dispatch(removeFilter(filtered)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFilter);
 */
