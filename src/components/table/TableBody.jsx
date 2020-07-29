import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const compareFilters = (planets, { column, comparison, value }) => {
  switch (comparison) {
    case 'maior que':
      return Number(planets[column]) > Number(value);
    case 'menor que':
      return Number(planets[column]) < Number(value);
    case 'igual a':
      return Number(planets[column]) === Number(value);
    default:
      return false;
  }
};

const sortPlanets = ({ column, sort }, planets) => {
  switch (sort) {
    case 'ASC':
      return planets.sort((a, b) => a[column] - b[column]);
    case 'DESC':
      return planets.sort((a, b) => b[column] - a[column]);
    default:
      return null;
  }
};

const TableBody = () => {
  const { filter, data } = useContext(StarWarsContext);

  let filteredPlanets = data
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((planet) => planet.name.toLowerCase().includes(filter.filterByName.name.toLowerCase()));

  if (filter.filterByNumericValues.length > 0) {
    filter.filterByNumericValues.forEach(
      (filtro) =>
        (filteredPlanets = filteredPlanets.filter((planet) => compareFilters(planet, filtro))),
    );
  }
  const filterOrder = filter.order;

  filteredPlanets = sortPlanets(filterOrder, filteredPlanets);

  const objKeys =
    filteredPlanets.length > 0
      ? Object.keys(filteredPlanets[0]).filter((tableData) => tableData !== 'residents')
      : null;

  return (
    <tbody>
      {filteredPlanets.map((planets) => (
        <tr key={planets.name}>
          {objKeys.map((key) => (
            <td data-testid="planet-name" key={key}>{planets[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
