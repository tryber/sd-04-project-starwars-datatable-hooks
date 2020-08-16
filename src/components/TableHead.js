import React from 'react';
import './css/tableHead.css';

const TableHead = ({ keys }) => {
  return (
    <thead className="table_head">
      <tr>
        {keys.map((info) => (
          <th key={`${info}`}>{info}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
