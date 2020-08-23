import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const filterPlanet = (planet, filter) => {
  const { column, comparison, value } = filter;
  if (comparison === 'maior que') {
    return Number(planet[column]) > Number(value);
  }
  if (comparison === 'menor que') {
    return Number(planet[column]) < Number(value);
  }
  if (comparison === 'igual a') {
    return Number(planet[column]) === Number(value);
  }
  return false;
};

const ordering = (column, sort, planets) => {
  const newPlanets = [...planets];
  if (!Number(newPlanets[0][column])) {
    newPlanets.sort(function (a, b) {
      const x = a[column.toLowerCase()].toLowerCase();
      const y = b[column.toLowerCase()].toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  } else {
    newPlanets.sort(function (a, b) {
      return a[column] - b[column];
    });
  }

  if (sort === 'ASC') return newPlanets;
  if (sort === 'DESC') return newPlanets.reverse();
  return newPlanets;
};

const CreateTableHeader = (data) => (
  <tr>
    {Object.keys(data)
      .filter((header) => header !== 'residents')
      .map((chaveDoHeader) => (
        <th key={chaveDoHeader}>{chaveDoHeader}</th>
      ))}
  </tr>
);
const CreateTableBody = (data, filteredData) =>
  filteredData.map((planet) => (
    <tr key={planet.name}>
      {Object.keys(data[0])
        .filter((header) => header !== 'residents')
        .map((column) => (
          <td key={planet[column]}>{planet[column]}</td>
        ))}
    </tr>
  ));
const Table = () => {
  const { data, filterByName, filterByNumericValues, order } = useContext(
    StarWarsContext,
  );
  let filteredData = !filterByName
    ? [...data]
    : [...data].filter((planet) => planet.name.includes(filterByName));
  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach((filtro) => {
      filteredData = filteredData.filter((planet) =>
        filterPlanet(planet, filtro),
      );
    });
  }

  filteredData = ordering(order.order.column, order.order.sort, filteredData);

  return (
    <div>
      <table>
        <thead>{CreateTableHeader(data[0])}</thead>
        <tbody>{CreateTableBody(data, filteredData)}</tbody>
      </table>
    </div>
  );
};

export default Table;
