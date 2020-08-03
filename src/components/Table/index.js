import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../../containers/App/PlanetContext';
import FiltersContext from '../../containers/Filters/FiltersContext';

const handlePlanetSort = (planets, order) => {
  const { column, sort } = order;

  return planets.sort((planetA, planetB) => {
    if (sort === 'ASC') {
      return planetA[column.toLowerCase()] > planetB[column.toLowerCase()] ? 1 : -1;
    }
    if (sort === 'DESC') {
      return planetA[column.toLowerCase()] < planetB[column.toLowerCase()] ? 1 : -1;
    }
  });
};

const handleNameFilter = (filterByName, planets) => {
  let filterResult = planets;

  if (filterByName.name) {
    filterResult = planets.filter((planet) =>
      planet.name.toLowerCase().includes(filterByName.name.toLowerCase())
    );
  }

  return filterResult;
};

const renderHeader = (planets) => (
  <thead>
    <tr>
      {Object.keys(planets[0]).map((header) => (
        <th>{header}</th>
      ))}
    </tr>
  </thead>
);

const renderData = (planets, order) => {
  const planetsData = [];
  const sortedPlanets = handlePlanetSort(planets, order);

  sortedPlanets.forEach((planet) => {
    const columns = Object.keys(planet).map((column) => <td>{planet[column]}</td>);

    planetsData.push(<tr key={planet.name}>{columns}</tr>);
  });

  return planetsData;
};

const Table = () => {
  const { planets, fetchPlanets } = useContext(PlanetsContext);
  const { filters } = useContext(FiltersContext);
  const { filterByName, filterByNumericValues, order } = filters;
  let filteredPlanets = planets.data;

  useEffect(() => {
    fetchPlanets();
  }, []);

  if (filterByName.name) {
    filteredPlanets = handleNameFilter(filterByName, filteredPlanets);
  }

  if (planets.planetsFetching) return <p>Loading...</p>;

  return (
    <table>
      {renderHeader(planets.data)}
      <tbody>{renderData(filteredPlanets, order)}</tbody>
    </table>
  );
};

export default Table;
