import React, { useContext } from 'react';
import TableHeader from './TableHeader';
import StarWarsContext from '../context/StarWarsContext';

const comparation = (planet, { column, comparison, value }) => {
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
};

const ordernation = (column, sort, planetsData) => {
  const planets = [...planetsData];
  if (!Number(planets[0][column])) {
    planets.sort((a, b) => {
      const x = a[column].toLowerCase();
      const y = b[column].toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  } else {
    planets.sort((a, b) => a[column] - b[column]);
  }

  return sort === 'ASC' ? planets : planets.reverse();
};

const filterPlanetByName = (planets, name = '') => planets.filter((planet) => planet.name.includes(name));

const Table = () => {
  const {
    data,
    isFetching,
    filterByName: { name },
    filterByNumericValues,
    order: { column, sort },
  } = useContext(StarWarsContext);

  let planets = [...data];

  if (planets.length > 1) {
    planets = ordernation(column, sort, planets);
  }

  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach((filter) => {
      planets = planets.filter((planet) => comparation(planet, filter));
    });
  }

  if (name !== '') planets = filterPlanetByName(planets, name);

  if (isFetching) return <p>Loading...</p>;

  return (
    <table className="table table-bordered table-dark">
      <TableHeader heads={Object.keys(data[0])} />
      <tbody>
        {planets.map((planet) => (
          <tr key={planet.name}>
            {Object.values(planet).map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
