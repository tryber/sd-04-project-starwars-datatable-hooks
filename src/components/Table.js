import React, { useContext, useEffect } from 'react';
import { StarsWarsContext } from '../context/StarWarsContext';
import FilterByName from './FilterByName';

import './Table.css';

const Table = () => {
  const { data, search } = useContext(StarsWarsContext);

  // Obtên o cabeçalho das colunas
  const columns = data[0] && Object.keys(data[0]);
  return (
    <div>
      <FilterByName />
      <table>
        <thead>
          <tr>{data[0] && columns.map((col) => <th>{col}</th>)}</tr>
        </thead>
        <tbody>
          {search(data).map((row) => (
            <tr key={row.name}>
              {columns.map((column) => (
                <td>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
