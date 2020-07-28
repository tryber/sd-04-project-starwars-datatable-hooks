import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

export const TableBody = () => {
  const { planet } = useContext(StarWarsContext);
  let filteredPlanets = [...planet];
  filteredPlanets.sort((a, b) => a.name.localeCompare(b.name));

  const objKeys =
    filteredPlanets.length > 0
      ? Object.keys(filteredPlanets[0]).filter((tableData) => tableData !== 'residents')
      : null;

  return (
    <tbody>
      {filteredPlanets.map((planet) => (
        <tr key={planet.name}>
          {objKeys.map((key) => (
            <td key={key}>{planet[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
