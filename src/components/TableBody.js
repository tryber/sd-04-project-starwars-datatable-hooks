import React, { useContext, useEffect, useState } from 'react';
import Increscent from '../Filter/Increscent';
import Decrease from '../Filter/Decrease';
import StarWarsContext from '../context/StarWarsContext';

function TableBody() {
  const [planets, setPlanets] = useState([]);
  const {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues: numericValues,
      order: { sort, column: columnSort },
    },
  } = useContext(StarWarsContext);

  useEffect(() => {
    const filtrar = sort === 'ASC'
        ? Increscent(planets, name, numericValues, columnSort)
        : Decrease(planets, name, numericValues, columnSort);
    setPlanets(filtrar);
  }, [name, numericValues, columnSort, sort]);

  return (
    <tbody>
      {console.log(data)}
      {data.map((planet) => (
        <tr key={planet.name}>
          <td>{planet.name}</td>
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

