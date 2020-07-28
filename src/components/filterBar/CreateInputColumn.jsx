import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StarWarsContext } from '../../context/StarWarsContext';

const CreateInputColumn = ({ changeColumn, column }) => {
  const { filter } = useContext(StarWarsContext);

  let optionsFiltered = filter.options;

  console.log('options filtered', optionsFiltered);

  filter.filterByNumericValues.forEach((filtro) => {
    optionsFiltered = optionsFiltered.filter((option) => option !== filtro.column);
  });

  console.log('filtros: ', filter.filterByNumericValues);

  return (
    <select
      data-testid="column-filter"
      name="column"
      id="column"
      value={column}
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
  column: PropTypes.string.isRequired,
};

// CreateInputColumn.defaultProps = {
//   column: '',
// };

export default CreateInputColumn;
