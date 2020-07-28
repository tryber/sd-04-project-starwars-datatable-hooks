import React from 'react';
import Header from './HeaderTable';
import Body from './BodyTable';
import { useStarWars } from '../context/StarWarsContext';

export default function Table() {
  const {
    textInput,
    planetsData: { data },
    filtersNumeric,
  } = useStarWars();

  const filterNumeric = (planets, filter) => {
    if (!filter) return planets;
    const { comparison, column, value } = filter;
    switch (comparison) {
      case 'maior que':
        return planets.filter((planet) => Number(planet[column]) > value);
      case 'menor que':
        return planets.filter((planet) => Number(planet[column]) < value);
      case 'igual a':
        return planets.filter((planet) => Number(planet[column]) === value);
      default:
        return planets;
    }
  };
  return (
    <div>
      <table>
        <Header />
        <Body planets={filterNumeric(data, filtersNumeric.slice(-1)[0])} name={textInput} />
      </table>
    </div>
  );
}
