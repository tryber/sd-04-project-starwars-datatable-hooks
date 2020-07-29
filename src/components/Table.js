import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../styles/Table.css';

const Table = () => {
  const { fetchPlanets, isLoading, planets, textInput } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const filter = () => {
    let infoPlanets = planets;
    if (textInput !== '')
      infoPlanets = planets.filter((planet) => planet.name.toLowerCase().includes(textInput));
    return infoPlanets;
  };

  if (isLoading) return <h2>Loading...</h2>;

  const title = Object.keys(planets[0]).filter((key) => key !== 'residents');
  return (
    <div>
      <div className="container">
        <table>
          <thead>
            <tr>
              {title.map((element) => (
                <th key={element}>{element}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filter().map((planet) => (
              <tr key={planet.name}>
                {title.map((element) => (
                  <td key={element}>{planet[element]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
