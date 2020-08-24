import React, { useContext, useEffect } from 'react';
import getPlanets from '../../services/SWAPI';
import StarWarsContext from '../../context/StarWarsContext';

const TableBody = () => {
  // const filteredPlanets = filterFunc(data, name, numericValues);
  const { data, setData, setLoading } = useContext(StarWarsContext);
  useEffect(() => {
    setLoading(true);
    getPlanets().then(
      (datajson) => {
        setData(datajson.results);
        setLoading(false);
      },
      (error) => {
        setData(error);
        setLoading(false);
      },
    );
  }, [setData, setLoading]);
  const planets = data;
  console.log(planets);

  return data ? (
    <tbody>
      {planets.map((planet) => (
        <tr key={planet.name}>
          <td>{planet.name}</td>
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
