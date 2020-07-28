import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';


function Table() {
  const { dataApi, isLoading, filterByName } = useContext(StarWarsContext);

  const filteredData = () => {
    let planets = [...dataApi];
    if (filterByName.name.length > 0) {
      planets = planets.filter((planet) => planet.name.includes(filterByName.name));
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
        {console.log(filterByName)}
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
