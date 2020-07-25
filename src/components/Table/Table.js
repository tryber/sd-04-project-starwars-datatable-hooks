import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';
import './Table.css';

const thead = [
  'name',
  'climate',
  'created',
  'diameter',
  'edited',
  'films',
  'gravity',
  'orbital_period',
  'population',
  'rotation_period',
  'surface_water',
  'terrain',
  'url',
];

const filterPlanetsByName = (planets, input) => {
  if (input === '') return planets;
  return planets.filter(({ name }) => name.toLowerCase().includes(input.toLowerCase()));
};

const filterPlanetsByNumericValues = (planets, filters) => {
  if (filters.length === 0) return planets;
  return filters.reduce((filteredPlanetsArray, filterNumericValue) => {
    const { column, comparison, value } = filterNumericValue;
    return filteredPlanetsArray.filter((planet) => {
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
  }, planets);
};

const sortPlanets = (planets, column, sort) => {
  if (planets.length === 0) return planets;
  const planetKey = column.toLowerCase();

  if (isNaN(planets[0][planetKey])) {
    planets.sort((a, b) => (a[planetKey] > b[planetKey] ? 1 : -1));
  } else {
    planets.sort((a, b) => a[planetKey] - b[planetKey]);
  }
  if (sort === 'DESC') planets.reverse();
  return planets;
};

const renderTableHead = () => (
  <thead>
    <tr>
      {thead.map((th) => (
        <th key={th}>{th}</th>
      ))}
    </tr>
  </thead>
);

const Table = () => {
  const {
    SWAPI: { loading, data },
    filters: {
      filterByName: { name },
      filterByNumericValues,
      order: { column, sort },
    },
  } = useContext(StarWarsContext);

  const renderTableBody = () => {
    const filteredByNamePlanets = filterPlanetsByName(data, name);
    const filteredPlanets = filterPlanetsByNumericValues(
      filteredByNamePlanets,
      filterByNumericValues,
    );
    const filteredSortedPlanets = sortPlanets(filteredPlanets, column, sort);
    return (
      <tbody>
        {filteredSortedPlanets.map((planet) => (
          <tr key={planet.name}>
            {thead.map((th) => {
              if (th === 'name') {
                return (
                  <td data-testid="planet-name" key={`${planet.name} ${th}`}>
                    {planet[th]}
                  </td>
                );
              }
              return <td key={`${planet.name} ${th}`}>{planet[th]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    );
  };

  if (loading || !data) return <div>loading...</div>;

  return (
    <div className="table-container">
      <table>
        {renderTableHead()}
        {renderTableBody()}
      </table>
    </div>
  );
};

export default Table;
