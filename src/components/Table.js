import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Colunas from './Colunas';
import funcFilterByNumericValues from '../functions/';

//ajuda do Julio 

const sortBy = (data, order) => {
  console.log(order);
  if (!data.length) return [];
  const planetKey = order.column.toLowerCase();
  if (isNaN(data[0][planetKey])) {
    data.sort((a, b) => (a[planetKey] > b[planetKey] ? 1 : -1));
  } else {
    data.sort((a, b) => a[planetKey] - b[planetKey]);
  }
  if (order.sort === 'DESC') data.reverse();
  return data;
};

function Table() {
  const { data, isLoading } = useContext(StarWarsContext);
  if (isLoading) return <div>loading...</div>;

  const {
    planetsData,
    filterByName: { name },
    filterByNumericValues,
    order,
  } = data;

  const filteredByNumericValues = funcFilterByNumericValues(
    planetsData,
    name,
    filterByNumericValues,
  );

  return (
    <table>
      <thead>
        <Colunas />
      </thead>
      <tbody>
        {sortBy(filteredByNumericValues, order).map((planet) => (
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
