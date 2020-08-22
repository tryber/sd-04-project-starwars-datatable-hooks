import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Colunas from './Colunas';

const filterTableByName = (search, planets) => {
  const planetasFiltrados = planets.filter(({ name }) =>
    name.toUpperCase().includes(search.toUpperCase())
  );
  return planetasFiltrados;
};

function Table() {
  const { data, isLoading } = useContext(StarWarsContext);
  console.log(isLoading);
  if (isLoading) return <div>loading...</div>;

  const {
    planetsData,
    filterByName: {name}
  } = data;

 // const {name} = filterByName;
const filteredPlanets = filterTableByName(name, planetsData);

  return (
    <table>
      <thead>
        <Colunas />
      </thead>
      <tbody>
        {filteredPlanets.map((planet) => (
          <tr>
            <td>{planet.name}</td>
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
