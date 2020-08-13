import React, { useEffect, useContext } from "react";
import StarWarsContext from "../context/StarWarsContext";

function TableBody() {
  const { data, setData } = useContext(StarWarsContext);
  const { planetData } = data;
  return (
    <div>
      <tbody>
        {planetData.map((planet) => (
          <tr key={planet.name}>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>
              {planet.films.map((film) => (
                <span key={film}>{film}</span>
              ))}
            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default TableBody;
