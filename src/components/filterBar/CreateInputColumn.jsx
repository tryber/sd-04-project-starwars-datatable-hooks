import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StarWarsContext } from '../../context/StarWarsContext';

const CreateInputColumn = ({ changeColumn, value }) => {
  const { filter } = useContext(StarWarsContext);

  let optionsFiltered = filter.options;

  filter.filterByNumericValues.forEach((filtro) => {
    optionsFiltered = optionsFiltered.filter((option) => option !== filtro.column);
  });

  return (
    <select
      data-testid="column-filter"
      name="column"
      id="column"
      value={value}
      onChange={(e) => changeColumn(e.target.value)}
    >
      {optionsFiltered.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

CreateInputColumn.propTypes = {
  changeColumn: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

// CreateInputColumn.defaultProps = {
//   column: '',
// };

export default CreateInputColumn;
