import React, { useContext } from 'react';
import FilterForms from './FilterForms';
import { StarWarsContext } from '../context/StarWarsContext';
import useData from '../context/useData';

const comparisson = (planet, { column, comparison, value }) => {
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    default:
      return false;
  }
};

const Table = () => {
  const { filterByNumericValues, filterByName, handleInput } = useContext(StarWarsContext);
  const { data } = useData();
  let planets = [...data];
  const keys = data.length >= 1 ? Object.keys(data[0]) : [];
  const tableHeader = keys.filter((key) => key !== 'residents');
  if (filterByNumericValues.length >= 1) {
    filterByNumericValues.forEach((filter) => {
      planets = planets.filter((planet) => comparisson(planet, filter));
    });
  }
  const inputText = filterByName.name;
  if (inputText !== '') planets = planets.filter((planet) => planet.name.includes(inputText));

  return (
    <div>
      <input data-testid="name-filter" type="text" onChange={(e) => handleInput(e.target.value)} />
      <FilterForms />
      <table>
        <thead>
          <tr>
            {tableHeader.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <tr key={planet.name}>
              {tableHeader.map((column) => (
                <td data-testid={column === 'name' ? 'planet-name' : null} key={planet[column]}>
                  {planet[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
