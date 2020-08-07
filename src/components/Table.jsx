import React, { useContext } from 'react';
import { StoreContext } from '../utils/store';
import Header from './Hearder';
import numericFilter from '../helpers/numericFilter';

// Função que ordena os planetas
const order = (dataPlanets, column, orderFilter) => {
  if (column === 'name' || column === 'climate') {
    dataPlanets.sort((a, b) => (a[column]).localeCompare(b[column]));
  } else if (orderFilter.sort === 'ASC') {
    dataPlanets.sort((a, b) => (Number(a[column]) - Number(b[column])));
  } else {
    dataPlanets.sort((a, b) => (Number(b[column]) - Number(a[column])));
  }
};

function Table() {
  const { planets, filters } = useContext(StoreContext);
  if (!planets) return <div>Loading...</div>;
  const newPlanets = planets.filter(({ name }) =>
    (name.toLowerCase()).includes(filters.filterByName),
  );
  const filteredPlanets = numericFilter(newPlanets, filters.filterByNumericValues);
  const column = filters.order.column;
  const sort = filters.order.sort;
  order(filteredPlanets, column, sort);
  return (
    <div>
      <table>
        <Header />
        <tbody>
          {newPlanets.map((planet) =>
            <tr key={planet.name}>
              <td>{planet.name}</td>
              <td>{planet.population}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td >Residents</td>
              <td >Films</td>
            </tr>,
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
