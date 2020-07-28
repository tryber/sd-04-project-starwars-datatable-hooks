import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import filterFunc from './functions/filterFunc';
import sortFunc from './functions/sortFunc';

function TableBody() {
  const {
    planets,
    filters: {
      filterByName: { name },
      filterByNumericValues: numericValues,
      order: { sort, column: columnToSort },
    },
  } = useContext(StarWarsContext);

  const data = filterFunc(planets, name, numericValues);
  const orderedPlanets = sortFunc(data, columnToSort, sort);

  return (
    <tbody>
      {orderedPlanets.map((planet) => (
        <tr key={planet.name}>
          <td data-testid="planet-name">{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>
            {planet.films.map((film) => (
              <span key={film}>{film}</span>
            ))}
          </td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
