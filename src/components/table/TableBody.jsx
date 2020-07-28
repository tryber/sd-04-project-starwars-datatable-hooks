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

const TableBody = () => {
  const { filter, data } = useContext(StarWarsContext);

  const filteredPlanets = [...data];
  filteredPlanets.sort((a, b) => a.name.localeCompare(b.name));

  let filteredByName = filteredPlanets.filter((planet) =>
    planet.name.toLowerCase().includes(filter.filterByName.name.toLowerCase()),
  );

  if (filter.filterByNumericValues.length > 0) {
    filter.filterByNumericValues.forEach(
      (filtro) =>
        (filteredByName = filteredByName.filter((planet) => compareFilters(planet, filtro))),
    );
  }
console.log(filter.options);

  console.log(filteredByName);

  const objKeys =
    filteredPlanets.length > 0
      ? Object.keys(filteredPlanets[0]).filter((tableData) => tableData !== 'residents')
      : null;

  return (
    <tbody>
      {filteredByName.map((planets) => (
        <tr key={planets.name}>
          {objKeys.map((key) => (
            <td key={key}>{planets[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
