import React, { useContext } from 'react';
import StoreProvider from '../utils/store';
import Header from './Hearder';
import numericFilter from '../helpers/numericFilter';

// const order = (column, sort, planets) => {
//   planets.sort((a, b) => {
//     if (!isNaN(a[column]) && !isNaN(b[column])) {
//       if (sort === 'ASC') {
//         return (a[column]).localeCompare(b[column]);
//       }
//       return (b[column]).localeCompare(a[column]);
//     }
//     if (sort === 'ASC') {
//       return (a[column]) - (b[column]);
//     }
//     return (b[column]) - (a[column]);
//   });
// };

const Table = () => {
  const { planets, filters } = useContext(StoreProvider);
  console.log(filters.filterByName);
  const newPlanets = planets.filter(({ name }) =>
    (name.toLowerCase()).includes(filters.filterByName),
  );
  console.log(filters);
  const filteredPlanets = numericFilter(newPlanets, filters.filterByNumericValues);
  // const column = filters.order.column;
  // const sort = filters.order.sort;
  // order(column, sort, filteredPlanets);
  return (
    <table>
      <Header />
      <tbody>
        {filteredPlanets.map((planet) =>
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
          </tr>,
        )}
      </tbody>
    </table>
  );
};

export default Table;
