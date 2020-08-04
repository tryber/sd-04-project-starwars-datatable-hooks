import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SWContext from '../context/StarWarsContext';

const TableHead = () => {
  const { data, fetching } = useContext(SWContext);
  if (data.length > 1) {
    const headers = Object.keys(data[0]).filter((header) => header !== 'residents');
    return (
      <thead className="thead-dark">
        <tr>
          {headers.map((header) => (
            <th key={`${header} index`}>{header}</th>
          ))}
        </tr>
      </thead>
    );
  }
  if (fetching === true) {
    return (
      <tbody>
        <tr>
          <td>Loading...</td>
        </tr>
      </tbody>
    );
  }
  return null;
};

export default TableHead;
