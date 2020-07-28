import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const TableBody = () => {
  const { planet } = useContext(StarWarsContext);
  const filteredPlanets = [...planet];
  filteredPlanets.sort((a, b) => a.name.localeCompare(b.name));

  const objKeys =
    filteredPlanets.length > 0
      ? Object.keys(filteredPlanets[0]).filter((tableData) => tableData !== 'residents')
      : null;

  return (
    <tbody>
      {filteredPlanets.map((planets) => (
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
