import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import TableBody from './TableBody';

const Table = () => {
  const { fetchPlanets, isLoading, planets } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  const title = Object.keys(planets[0]).filter((key) => key !== 'residents');
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              {title.map((element) => (
                <th key={element}>{element}</th>
              ))}
            </tr>
          </thead>
          <TableBody />
        </table>
      </div>
    </div>
  );
};

export default Table;
