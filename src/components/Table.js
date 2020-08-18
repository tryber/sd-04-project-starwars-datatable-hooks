import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FilterPlanet from '../components/filterPlanet';
import FilterValue2 from './FilterValue';

function App() {
  const { data } = useContext(StarWarsContext);

  if (data.isFetching) return <p>Loading.....</p>;
  return (
    <table>
      <thead>
        <FilterPlanet />
        <FilterValue2 />
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
      {/* <TableBody /> */}
    </table>
  );
}

export default App;
