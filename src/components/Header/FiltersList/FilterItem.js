import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { starContext } from '../../../context';

function FilterItem({ filter: { column, comparison, value } }) {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(starContext);

  const onRemoveNumericFilter = (toRemove) => {
    setFilterByNumericValues(filterByNumericValues.filter((filter) => filter.column !== toRemove));
  };

  return (
    <div data-testid="filter">
      {`${column} ${comparison} ${value}`}
      <button type="button" onClick={() => onRemoveNumericFilter(column)}>X</button>
    </div>
  );
}

FilterItem.propTypes = {
  filter: PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default FilterItem;
