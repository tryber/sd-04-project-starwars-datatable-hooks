import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const TableBody = () => {
  const { planets, textInput, filters } = useContext(StarWarsContext);

  const filter = () => {
    let infoPlanets = planets;
    if (textInput !== '') {
      infoPlanets = planets.filter((planet) => planet.name.toLowerCase().includes(textInput));
    }
    if (filters.filterByNumericValues.length > 0) {
      filters.filterByNumericValues.forEach(({ column, comparison, value }) => {
        infoPlanets = planets.filter((planet) => {
          if (comparison === 'maior que') return Number(planet[column]) > Number(value);
          if (comparison === 'menor que') return Number(planet[column]) < Number(value);
          if (comparison === 'igual a') return Number(planet[column]) === Number(value);
          return null;
        });
      });
    }
    return infoPlanets;
  };

  const title = Object.keys(planets[0]).filter((key) => key !== 'residents');

  return (
    <tbody>
      {filter().map((planet) => (
        <tr key={planet.name}>
          {title.map((element) => (
            <td key={element}>{planet[element]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
