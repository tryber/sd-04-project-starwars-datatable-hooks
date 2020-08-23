import React from 'react';
import TableBody from './TableBody';
import usePlanets from '../context/usePlanets'

function App() {
  const { isFetching } = usePlanets();
  if (isFetching) return <span className="home-loading">Loading...</span>;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>surface water</th>
          <th>Population</th>
          <th>Film</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <TableBody />
    </table>
  );
}

export default App;
