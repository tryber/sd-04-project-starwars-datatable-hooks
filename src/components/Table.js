import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const states = useContext(StarWarsContext);
  const { data, filterByName, filteredData } = states;
  const array = filterByName.name === '' ? data : filteredData;
  const titles = data[0] ? Object.keys(data[0]) : [];

  return (
    <table>
      <thead>
        <tr>
          {titles
            .filter((_, index) => index !== 9)
            .map((planet) => <th key={planet}>{planet}</th>)}
        </tr>
      </thead>
      <tbody>
        {array.map((planets) => (
          <tr key={planets.name}>
            {Object.values(planets)
              .filter((_, index) => index !== 9)
              .map((planet) => <td key={planet}>{planet}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
