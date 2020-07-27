import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { SWContext } from '../context/SWContext';

const TableBody = () => {
  const { name, getName } = useContext(SWContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((res) => {
        // console.log(res.data.results)
        setData(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
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
