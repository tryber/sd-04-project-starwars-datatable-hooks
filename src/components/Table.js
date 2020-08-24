import React from 'react';
const CreateTableHeader = () => (
  <tr>
    <th>star wars!</th>
  </tr>
);
const CreateTableBody = () => {
  return (
    <tr>
      <td data-testid="planet-name">Planet</td>
    </tr>
  );
}
const Table = () => {
  return (
    <div>
      <table>
        <thead>{CreateTableHeader()}</thead>
        <tbody>{CreateTableBody()}</tbody>
      </table>
    </div>
  );
}

export default Table;
