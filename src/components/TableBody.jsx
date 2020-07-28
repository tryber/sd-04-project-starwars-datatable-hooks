import React, { useEffect, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const TableBody = () => {
  const { swApi, data, fetching, nameFilter } = useContext(StarWarsContext);

  useEffect(() => {
    swApi();
  }, []);

  const filteredPlanetsByName = [...data].filter((planet) =>
    planet.name.toLowerCase().includes(nameFilter.toLowerCase()),
  );

  if (fetching) return <p>Loading...</p>;
  return (
    <tbody>
      {filteredPlanetsByName.map((planets) => (
        <tr key={planets.name}>
          <td>{planets.name}</td>
          <td>{planets.rotation_period}</td>
          <td>{planets.orbital_period}</td>
          <td>{planets.diameter}</td>
          <td>{planets.climate}</td>
          <td>{planets.gravity}</td>
          <td>{planets.terrain}</td>
          <td>{planets.surface_water}</td>
          <td>{planets.population}</td>
          <td>{planets.films}</td>
          <td>{planets.created}</td>
          <td>{planets.edited}</td>
          <td>{planets.url}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
