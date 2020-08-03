import React, { useContext, useEffect, useState } from 'react';
import orderASC from '../Filter/OrderASC';
import orderDESC from '../Filter/OrderDESC';
import StarWarsContext from '../../context/StarWarsContext';

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
    const filtered = sort === 'ASC'
      ? orderASC(data, name, numericValues, columnSort)
      : orderDESC(data, name, numericValues, columnSort);
    setPlanets(filtered);
  }, [name, numericValues, columnSort, sort]);

  return (
    <tbody>
      {planets.map((planet) => (
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
            {planet.films.map((filme) => (
              <span key={filme}>{filme}</span>
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
