import React, { useContext, useEffect } from 'react';
import getPlanets from '../../services/SWAPI';
import StarWarsContext from '../../context/StarWarsContext';
import filterFunc from '../functions/filterFunc';
import sortFunc from '../functions/sortFunc';

const TableBody = () => {
  const { data, setData, setLoading, filterByName, filterByNumericValues } = useContext(
    StarWarsContext,
  );
  useEffect(() => {
    setLoading(true);
    getPlanets().then(
      (datajson) => {
        setData(sortFunc(datajson.results, 'Name', 'ASC'));
        setLoading(false);
      },
      (error) => {
        setData(error);
        setLoading(false);
      },
    );
  }, [setData, setLoading]);
  // let filteredPlanets = [];
  let planets = filterFunc(data, filterByName.name, filterByNumericValues);
  return (data) ? (
    <tbody>
      {planets.map((planet) => (
        <tr key={planet.name}>
          <td data-testid="planet-name">{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td key={planet.surface_water}>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>
            {planet.films.map((film) => (
              <span key={film}>{film}</span>
            ))}
          </td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
        </tr>
      ))}
    </tbody>
  ) : null;
};

export default TableBody;
