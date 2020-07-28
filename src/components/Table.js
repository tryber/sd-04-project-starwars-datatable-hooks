import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const states = useContext(StarWarsContext);
  const {
    data, filterByName, filteredData, filterByNumericValues,
  } = states;

  const toggleFilter = () => {
    if (filterByNumericValues.length < 1) return data;
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
    }, data);
  };

  const planets = filterByName.name === '' ? toggleFilter() : filteredData;
  const titles = planets[0] ? Object.keys(planets[0]) : [];

  return (
    <table>
      <thead>
        <tr>
          {titles
            .filter((_, index) => index !== 9)
            .map((planet) => <th key={planet}>{planet}</th>)}
        </tr>
      </thead>
      <tbody>
        {planets.map((planets) => (
          <tr key={planets.name}>
            {Object.values(planets)
              .filter((_, index) => index !== 9)
              .map((planet) => <td key={planet}>{planet}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
