import React from 'react';
import PropTypes from 'prop-types';

const CreateInputColumn = ({ changeColumn, column }) => (
  <select name="column" id="column" value={column} onChange={(e) => changeColumn(e.target.value)}>
    <option value="" />
    <option value="1">1</option>
  </select>
);

CreateInputColumn.propTypes = {
  changeColumn: PropTypes.func.isRequired,
  column: PropTypes.string,
};

CreateInputColumn.defaultProps = {
  column: '',
};

export default CreateInputColumn;
