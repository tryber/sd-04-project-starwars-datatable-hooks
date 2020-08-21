import React from 'react';
import useData from '../context/useData';

const Table = () => {
  const { data } = useData();
  let planets = [...data];
  const keys = data.length >= 1 ? Object.keys(data[0]) : [];
  const tableHeader = keys.filter((key) => key !== 'residents');

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHeader.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <tr key={planet.name}>
              {tableHeader.map((column) => (
                <td data-testid={column === 'name' ? 'planet-name' : null} key={planet[column]}>
                  {planet[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;