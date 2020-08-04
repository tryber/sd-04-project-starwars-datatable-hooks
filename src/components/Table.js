import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const states = useContext(StarWarsContext);
  const { data, filterByName, filteredData, filterByNumericValues, order } = states;

  const sortingData = (sortBy) => {
    const { column, sort } = order;
    let sortData = sortBy;
    const selectedCol = column.toLowerCase();
    if (
      selectedCol === 'name' ||
      selectedCol === 'climate' ||
      selectedCol === 'terrain'
    ) {
      sortData = sortData.sort((a, b) => a[selectedCol].localeCompare(b[selectedCol]));
    }
    if (sort === 'ASC') {
      sortData = sortData.sort((a, b) => a[selectedCol] - b[selectedCol]);
    }
    if (sort === 'DESC') {
      sortData = sortData.sort((a, b) => b[selectedCol] - a[selectedCol]);
    }
    return sortData;
  };

  const toggleFilter = () => {
    if (filterByNumericValues.length < 1) return sortingData(data);
    return filterByNumericValues.reduce((newArray, filters) => {
      const { column, comparison, value } = filters;
      return newArray.filter((planet) => {
        switch (comparison) {
          case 'maior que':
            return Number(planet[column]) > Number(value);
          case 'menor que':
            return Number(planet[column]) < Number(value);
          case 'igual a':
            return Number(planet[column]) === Number(value);
          default:
            return false;
        }
      });
    }, sortingData(data));
  };

  const planetsData = filterByName.name === '' ? toggleFilter() : filteredData;
  const titles = planetsData[0] ? Object.keys(planetsData[0]) : [];

  return (
    <table>
      <thead>
        <tr>
          {titles
            .filter((_, index) => index !== 9)
            .map((planet) => (
              <th key={planet}>{planet}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {planetsData.map((planets) => (
          <tr key={planets.name}>
            <td key={planets.name} data-testid="planet-name">
              {planets.name}
            </td>
            <td key={planets.rotation_period}>{planets.rotation_period}</td>
            <td key={planets.orbital_period}>{planets.orbital_period}</td>
            <td key={planets.diameter}>{planets.diameter}</td>
            <td key={planets.climate}>{planets.climate}</td>
            <td key={planets.gravity}>{planets.gravity}</td>
            <td key={planets.terrain}>{planets.terrain}</td>
            <td key={planets.surface_water}>{planets.surface_water}</td>
            <td key={planets.population}>{planets.population}</td>
            <td key={planets.films}>{planets.films}</td>
            <td key={planets.created}>{planets.created}</td>
            <td key={planets.edited}>{planets.edited}</td>
            <td key={planets.url}>{planets.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
