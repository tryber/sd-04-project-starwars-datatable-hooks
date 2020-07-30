import React, { useContext } from 'react';
import StoreProvider from '../utils/store';
import Header from './Hearder';

const Table = () => {
  const { planets, filters } = useContext(StoreProvider);
  console.log(filters.filterByName);
  const newPlanets = planets.filter(({ name }) =>
    (name.toLowerCase()).includes(filters.filterByName),
  );
  return (
    <table>
      <Header />,
      <tbody>,
        {newPlanets.map((planet) =>
          <tr key={planet.name}>
            <td>{planet.name}</td>
            <td>{planet.population}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
          </tr>,
        )}
      </tbody>
    </table>
  );
};

export default Table;
