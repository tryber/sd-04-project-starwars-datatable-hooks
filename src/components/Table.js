import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Colunas from './Colunas';
import funcFilterByNumericValues from '../functions/';

/* const filterTableByName = (search, planets) => {
  const planetasFiltrados = planets.filter(({ name }) =>
    name.toUpperCase().includes(search.toUpperCase())
  );
  return planetasFiltrados;
}; */

function Table() {
  const { data, isLoading } = useContext(StarWarsContext);
  if (isLoading) return <div>loading...</div>;

  const {
    planetsData,
    filterByName: { name },
    filterByNumericValues,
  } = data;

  const filteredByNumericValues = funcFilterByNumericValues(
    planetsData,
    name,
    filterByNumericValues,
  );
  // const {name} = filterByName;
  /*   const filteredPlanets = filterTableByName(name, planetsData);
   */
  return (
    <table>
      <thead>
        <Colunas />
      </thead>
      <tbody>
        {filteredByNumericValues.map((planet) => (
          <tr>
            <td data-testid="planet-name">{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
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
