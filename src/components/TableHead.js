import React from 'react';
import PropTypes from 'prop-types';
import './css/tableHead.css';

const TableHead = ({ keys }) => (
  <thead className="table_head">
    <tr>
      {keys.map((info) => (
        <th key={`${info}`}>{info}</th>
      ))}
    </tr>
  </thead>
);

TableHead.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHead;
