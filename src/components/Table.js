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

const filterPlanetByName = (planets, name = '') => planets.filter((planet) => planet.name.includes(name));

const Table = () => {
  const {
    data,
    isFetching,
    filterByName: { name },
    filterByNumericValues,
  } = useContext(StarWarsContext);

  let planets = [...data];

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
