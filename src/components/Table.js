import React, { useContext } from 'react';
import useData from '../context/useData';
import { SWcontext } from '../context/SWcontext';

const Table = () => {
  const { data } = useData();
  const { filterByName, handleInput } = useContext(SWcontext);
  let planets = [...data];
  const keys = data.length >= 1 ? Object.keys(data[0]) : [];
  const tableHeader = keys.filter((key) => key !== 'residents');
  const inputText = filterByName.name;
  if (inputText !== '') planets = planets.filter((planet) => planet.name.toLowerCase().includes(inputText.toLowerCase()));

  return (
    <div>
       <input data-testid="name-filter" type="text" onChange={(e) => handleInput(e.target.value)} />
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