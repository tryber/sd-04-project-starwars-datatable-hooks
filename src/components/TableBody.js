import React from 'react';
import './css/tableBody.css';

const TableBody = ({ keys }) => (
  <tbody className="table_body">
    {keys.map((line, index) => (
      <tr key={`${line[index]} pai`}>
        {line.map((info, index) => (
          <td key={`${info} filho`}>{line[index]}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

export default TableBody;
