import React, { useContext } from 'react';
import { StarsWarsContext } from '../context/StarWarsContext';

const TableHead = () => {
  const { data } = useContext(StarsWarsContext);

  const columns = Object.keys(data[0]).filter((col) => col !== 'residents');

  console.log(columns);

  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={col}>{col}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
