import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function RenderTable() {
  const { data, filters } = useContext(StarWarsContext);
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
        {data
          .filter((planet) => planet.name.includes(filters.filterByName.name))
          .map(({ residents, ...planet }) => (
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
