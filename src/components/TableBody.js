import React, { useContext } from 'react';
import StartWarsContext from '../context/StarWarsContext';

const TableBody = () => {
  const { planets, name } = useContext(StartWarsContext);
  const filterName = planets.filter((planet) => planet.name.includes(name));
  return (
    <tbody>
      {filterName.map((item) => (
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.population}</td>
          <td>{item.climate}</td>
          <td>{item.diameter}</td>
          <td>{item.gravity}</td>
          <td>{item.orbital_period}</td>
          <td>{item.rotation_period}</td>
          <td>{item.surface_water}</td>
          <td>{item.terrain}</td>
          <td>{item.films.map((film) => (
            <p key={film}>{film}</p>
          ))}</td>
          <td>{item.edited}</td>
          <td>{item.created}</td>
          <td>{item.url}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
