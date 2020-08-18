import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StarWarsContext } from '../../context/StarWarsContext';
import '../css/tableBody.css';

const renderTable = (keys) => (
  <tbody className="table_body">
    {keys.map((line, index) => (
      <tr key={`${line[index]} pai`}>
        {line.map((info, count) => (
          <td key={`${info} filho`}>{line[count]}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

const whatColumn = (column) => {
  // population = 8 / orbital_period = 2 / diameter = 3 / rotation_period = 1 / surface_water = 7
  if (column === 'rotation_period') return 1;
  else if (column === 'orbital_period') return 2;
  else if (column === 'diameter') return 3;
  else if (column === 'surface_water') return 7;
  return 8;
};

const compareCompative = (compareA, compareB, signal) => {
  const numberA = parseFloat(compareA);
  const numberB = parseFloat(compareB);
  //  console.log('comp A', numberA);
  //  console.log('comp B', numberB);
  //  console.log('volta', (numberA < numberB));
  if (signal === 'maior que') return (numberA > numberB);
  else if (signal === 'menor que') return (numberA < numberB);
  return (numberA === numberB);
};

const compareData = (planet, filters) => { 
  let isCompative = false;
  for (let increment = 0; increment < filters.length; increment += 1) {
    const actualFilter = filters[increment];
    const colPlanet = whatColumn(actualFilter.column);
    isCompative = compareCompative(planet[colPlanet], actualFilter.value, actualFilter.comparison);
    if (!isCompative) break;
  };
  return isCompative;
};

const aplyName = (keys, name) => {
  const newData = keys.filter((planet) => {
    const namePlanetLower = [];
    namePlanetLower.push(planet[0].toLowerCase());
    return namePlanetLower[0].includes(name.toLowerCase());
  });
  return renderTable(newData);
};

const aplyNumeric = (keys, filterByNumericValues) => {
  const newData = keys.filter((planet) => {
    //  console.log('-----------------------');
    //  console.log('resp', compareData(planet, filterByNumericValues));
    return compareData(planet, filterByNumericValues);
  });
  return renderTable(newData);
};

const TableBody = ({ keys }) => {
  const { filters } = useContext(StarWarsContext);
  const {
    filterByName: { name },
    filterByNumericValues,
  } = filters;

  if (name) return aplyName(keys, name);
  else if (filterByNumericValues.length) return aplyNumeric(keys, filterByNumericValues);
  return (!keys.length ? <tbody><tr><td>Loading...</td></tr></tbody> : renderTable(keys));
};

TableBody.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default TableBody;
