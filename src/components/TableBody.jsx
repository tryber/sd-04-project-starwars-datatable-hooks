import React, { useEffect } from 'react';
import { useState } from 'react';

const TableBody = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      'https://swapi-trybe.herokuapp.com/api/planets/'
    );
    const res = await response.json();
    const planets = res.results;
    // console.log(planets);
    setData(planets);
  }, []);

  return (
    <tbody>
      {data.map((planets) => (
        <tr key={planets.name}>
          <td>{planets.name}</td>
          <td>{planets.rotation_period}</td>
          <td>{planets.orbital_period}</td>
          <td>{planets.diameter}</td>
          <td>{planets.climate}</td>
          <td>{planets.gravity}</td>
          <td>{planets.terrain}</td>
          <td>{planets.surface_water}</td>
          <td>{planets.population}</td>
          <td>{planets.films}</td>
          <td>{planets.created}</td>
          <td>{planets.edited}</td>
          <td>{planets.url}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
