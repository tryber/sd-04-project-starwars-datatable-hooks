import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function RenderTable() {
  const { data } = useContext(StarWarsContext);
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0])
            .filter((element) => element !== 'residents')
            .map((key) => (
              <th key={key}>{key}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ residents, ...planet }) => (
          <tr key={planet.name}>
            {Object.values(planet).map((value) => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RenderTable;
