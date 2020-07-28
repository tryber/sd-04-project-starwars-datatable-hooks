import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const TableBody = () => {
  const { filter, data } = useContext(StarWarsContext);

  const filteredPlanets = [...data];
  filteredPlanets.sort((a, b) => a.name.localeCompare(b.name));

  const filteredByName = [...filteredPlanets].filter((planet) =>
    planet.name.toLowerCase().includes(filter.filterByName.name.toLowerCase()),
  );

  const objKeys =
    filteredPlanets.length > 0
      ? Object.keys(filteredPlanets[0]).filter((tableData) => tableData !== 'residents')
      : null;

  return (
    <tbody>
      {filteredByName.map((planets) => (
        <tr key={planets.name}>
          {objKeys.map((key) => (
            <td key={key}>{planets[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
