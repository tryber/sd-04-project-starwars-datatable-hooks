import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import filteredDataFunc from './FilterFunction';

function Table() {
  const { dataApi, isLoading, filters } = useContext(StarWarsContext);
  const { filterByName, filterByNumericValues, order } = filters;

  const chaves =
    (dataApi.length !== 0) ? Object.keys(dataApi[0]).filter((keys) => keys !== 'residents') : [];

  const planets = filteredDataFunc(dataApi, filterByName, filterByNumericValues, order);

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
              {chaves.map((chave) => {
                if (chave !== 'name') return <td key={`${planet.name} ${chave}`}>{planet[chave]}</td>
                return <td key={`${planet.name} ${chave}`} data-testid="planet-name">{planet[chave]}</td>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
