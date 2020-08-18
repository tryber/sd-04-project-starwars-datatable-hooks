import React from 'react';
import useFilters from '../hooks/useFilters';

export default function RemoveFilter() {
  const { filterByNumericValues, setRemoved } = useFilters();

  return filterByNumericValues.map((type) => (
    <div data-testid="filter" key={type.column}>
      <span>{`${type.column} - ${type.comparison} - ${type.value} `}</span>
      <button type="button" onClick={() => setRemoved(type)}>
X
      </button>
    </div>
  ));
}

/* const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (removeSelect) => dispatch(filterRemove(removeSelect)),
});

RemoveFilter.propTypes = {
  numericValues: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  remove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFilter);
 */
