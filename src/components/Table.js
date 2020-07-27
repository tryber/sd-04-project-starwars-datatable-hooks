import React, { useContext } from 'react';
import StartWarsContext from '../context/StarWarsContext';
import '../styles/Table.css';

function Table() {
  const data = useContext(StartWarsContext);
  const title = Object.keys(data[0]).filter((key) => key !== 'residents');
  return (
    <div>
      <div className="container">
        <table>
          <thead>
            <tr>
              {title.map((element) => (
                <th key={element}>{element}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((planet) => (
              <tr key={planet.name}>
                {title.map((element) => (
                  <td key={element}>{planet[element]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
