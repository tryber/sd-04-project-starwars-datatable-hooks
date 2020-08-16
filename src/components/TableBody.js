import React from 'react';
import PropTypes from 'prop-types';
import './css/tableBody.css';

const TableBody = ({ keys }) => (
  <tbody className="table_body">
    {keys.map((line, index) => (
      <tr key={`${line[index]} pai`}>
        {line.map((info, count) => (
          <td key={`${info} filho`}>{line[count]}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

TableBody.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.array).isRequired,
}

export default TableBody;
