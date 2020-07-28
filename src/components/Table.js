import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import filteredDataFunc from './FilterFunction';

function Table() {
  const { dataApi, isLoading, filters } = useContext(StarWarsContext);
  const { filterByName, filterByNumericValues } = filters;

  const chaves =
    (dataApi.length !== 0) ? Object.keys(dataApi[0]).filter((keys) => keys !== 'residents') : [];

  const planets = filteredDataFunc([...dataApi], filterByName, filterByNumericValues);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {chaves.map((chave) => (<th key={chave}>{chave}</th>))}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <tr key={`${planet.name} 1`}>
              {chaves.map((chave) => (
                <td key={`${planet.name} ${chave}`}>{planet[chave]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
