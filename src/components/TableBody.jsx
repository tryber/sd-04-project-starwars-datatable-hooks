import React, { Component } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import { useContext } from 'react';

function TableBody() {
  const { data } = useContext(StarWarsContext);
  return (
    <tbody>
      {data.map((planet) => (
        <tr key={planet.name}>
          {Object.keys(planet).map((information) => (
            <td key={information}>{planet[information]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
