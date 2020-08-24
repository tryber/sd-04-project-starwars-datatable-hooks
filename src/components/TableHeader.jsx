import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function TableHeader() {
  const { data } = useContext(StarWarsContext);
  return (
    <thead>
      <tr>
        {Object.keys(data[0]).map((head) => (
          <th key={head}>{head}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
