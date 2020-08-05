import React, { useEffect, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import fecthFunction from '../services/fetchFunction';
import filterFunction from '../services/filterFunction';

const Table = () => {
  const { setPlanetsData, planetsData, filters } = useContext(StarWarsContext);
  const { filterByName, filterByNumericValues, order } = filters;
  useEffect(() => {
    fecthFunction().then((data) => setPlanetsData(data.results));
  }, [setPlanetsData]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Residents</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
        </tr>
      </thead>
      <tbody>
        {filterFunction(
          planetsData,
          filterByName,
          filterByNumericValues,
          order,
        ).map(
          ({
            name,
            rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water: surfaceWater,
            population,
            residents,
            films,
            created,
            edited,
          }) => (
            <tr key={name}>
              <td data-testid="planet-name" key={name + name}>{name}</td>
              <td key={name + rotationPeriod}>{rotationPeriod}</td>
              <td key={name + orbitalPeriod}>{orbitalPeriod}</td>
              <td key={name + diameter}>{diameter}</td>
              <td key={name + climate}>{climate}</td>
              <td key={name + gravity}>{gravity}</td>
              <td key={name + terrain}>{terrain}</td>
              <td key={name + surfaceWater}>{surfaceWater}</td>
              <td key={name + population}>{population}</td>
              <td key={name + residents}>{residents}</td>
              <td key={name + films}>{films}</td>
              <td key={name + created}>{created}</td>
              <td key={name + edited}>{edited}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default Table;

// jeito de fazer a tabela automática:
// {data.length !== 0 && filterFunction(data, filterValues, filterNumber, order).map(
//   (title) => (
//     <tr key={title.name}>
//       {Object.keys(title).map((category) => (
//         <td key={title[category] + title[category]}>{title[category]}</td>
//       ))}
//     </tr>
//   )
// )}
