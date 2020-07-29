import React from 'react';
import PropTypes from 'prop-types';

const FilterOrderSelect = ({ column, setColumn, tableHeaders }) => {
  return (
    <select
      name="column"
      id="column"
      value={column}
      onChange={(event) => setColumn(event.target.value)}
      data-testid="column-sort"
    >
      {tableHeaders.map((item) => (
        <option key={item} value={item.charAt(0).toUpperCase() + item.slice(1)}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </option>
      ))}
    </select>
  );
};

FilterOrderSelect.propTypes = {
  column: PropTypes.string.isRequired,
  setColumn: PropTypes.func.isRequired,
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterOrderSelect;
