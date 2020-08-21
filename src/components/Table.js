import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, isLoading } = useContext(StarWarsContext);
  const titles = data[0] ? Object.keys(data[0]) : [];
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <table>
      <thead>
        <tr>
          {titles
            .filter((_, index) => index !== 9)
            .map((title) => (
              <th>{title}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map((planet) => (
          <tr>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity	}</td>
            <td>{planet.terrain	}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
