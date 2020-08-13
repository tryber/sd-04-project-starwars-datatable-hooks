import React, { useContext, useEffect } from 'react';
// import TableBody from './TableBody';
// import Provider from '../context/AppContext';
import StarWarsContext from '../context/StarWarsContext';
import getApi from '../sercives/ApiPlanets';

function App() {
  const { data, setData } = useContext(StarWarsContext);
  useEffect(() => {
    getApi().then((array) =>
      setData({ ...data, planetData: array.results, isFetching: false })
    );
  }, []);

  if (data.isFetching) return <p>Loading.....</p>;
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
      {/* <TableBody /> */}
    </table>
  );
}

export default App;
