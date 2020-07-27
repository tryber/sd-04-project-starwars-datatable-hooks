import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const TableHeader = () => {
  const { data } = useContext(StarWarsContext);
  return (
    <tr className="table bg-info">
      {Object.keys(data[0]).map(
        (header) => header !== 'residents' && <th key={header}>{header}</th>,
      )}
    </tr>
  );
};

export default TableHeader;
