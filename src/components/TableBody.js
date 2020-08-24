import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import filterFunc from './filterFun';

const orderDescAndAsc = (data, order) => {
  if (!data.length) return [];
  const planetKey = order.column.toLowerCase();
  if (!Number(data[0][planetKey])) {
    data.sort((a, b) => (a[planetKey] > b[planetKey] ? 1 : -1));
  } else {
    data.sort((a, b) => a[planetKey] - b[planetKey]);
  }
  if (order.sort === "DESC") data.reverse();
  return data;
};

function TableBody() {
  const { data } = useContext(StarWarsContext);
  const {
    planetData,
    filterByName: { name },
    filterByNumericValues,
    order,
  } = data; // desestruturando da AppContext

  const filterAllSelectedElement = filterFunc(
    planetData,
    name,
    filterByNumericValues,
  );
  return (
    <div>
      <tbody>
        {orderDescAndAsc(filterAllSelectedElement,order).map((planet) => (
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
