import React, { useContext } from 'react';
import './Table.css';
import { StarWarsContext } from '../context/starWarsContext';

const usedColumns = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

const filterPlanetsName = (array, filter) => {
  if (filter === '') return array;
  return array.filter((planet) => planet.name.toLowerCase().includes(filter.toLowerCase()));
};

const filterPlanetsComparison = (array, filter) => {
  if (filter.length === 0) return array;
  return filter.reduce((acc, crr) => {
    const { column, comparison, value } = crr;
    return acc.filter((planet) => {
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
  }, array);
};

const Table = () => {
  const { planets, filters } = useContext(StarWarsContext);
  const input = filters.filterByName.name;
  const arrayPlanets = filterPlanetsName(planets.data, input);
  if (planets.loading) return <h1>Loading...</h1>;
  return (
    <div className="daniteste">
      <table>
        <thead>
          <tr>
            {usedColumns.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterPlanetsComparison(arrayPlanets, filters.filterByNumericValues).map((planet) => (
            <tr key={planet.diameter}>
              {usedColumns.map((key) => (
                <td key={key}>{planet[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
