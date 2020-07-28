import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';


function Table() {
  const { dataApi, isLoading, filters} = useContext(StarWarsContext);

  const filteredData = () => {
    let planets = [...dataApi];
    const { name } = filters.filterByName;
    const { filterByNumericValues } = filters;
    if (name.length > 0) {
      planets = planets.filter((planet) => planet.name.includes(name));
    }
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        planets = planets.filter((planet) => {
          if (comparison === 'menor que') return Number(planet[column]) < Number(value);
          if (comparison === 'igual a') return Number(planet[column]) === Number(value);
          if (comparison === 'maior que') return Number(planet[column]) > Number(value);
          return null;
        });
      });
    }
    return planets;
  };

  const chaves =
    (dataApi.length !== 0) ? Object.keys(dataApi[0]).filter((keys) => keys !== 'residents') : [];

  const planets = filteredData();

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <table className="table">
        {console.log(filters)}
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
