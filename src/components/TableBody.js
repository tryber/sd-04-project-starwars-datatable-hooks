import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const TableBody = () => {
  const { planets, textInput, comparisonFilter, comparison, button } = useContext(
    StarWarsContext,
  );

  const filter = () => {
    let infoPlanets = planets;
    if (textInput !== '') {
      infoPlanets = planets.filter((planet) => planet.name.toLowerCase().includes(textInput));
    }
    if (comparison.length > 0 && button) {
      infoPlanets = planets.filter((planet) => {
        if (comparisonFilter[1] === 'maior que') {
          return Number(planet[comparisonFilter[0]]) > Number([comparisonFilter[2]]);
        }
        if (comparisonFilter[1] === 'menor que') {
          return Number(planet[comparisonFilter[0]]) < Number([comparisonFilter[2]]);
        }
        if (comparisonFilter[1] === 'igual a') {
          return Number(planet[comparisonFilter[0]]) === Number([comparisonFilter[2]]);
        }
        return null;
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
