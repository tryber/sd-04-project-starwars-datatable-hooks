import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const states = useContext(StarWarsContext);
  const { data } = states;

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0])
            .filter((_, index) => index !== 9)
            .map((planet) => <th key={planet}>{planet}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((planets) => (
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
