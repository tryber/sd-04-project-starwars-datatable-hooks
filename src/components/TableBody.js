import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import filterFunc from './filterFun';

function TableBody() {
  const { data } = useContext(StarWarsContext);
  const {
    planetData,
    filterByName: { name },
    filterByNumericValues,
  } = data; // desestruturando da AppContext

  const filterAllSelectedElement = filterFunc(
    planetData,
    name,
    filterByNumericValues,
  );
  return (
    <div>
      <tbody>
        {filterAllSelectedElement.map((planet) => (
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
    </div>
  );
}

export default TableBody;
