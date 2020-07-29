import React, { useContext, useEffect } from 'react';
import SWContext from '../context/StarWarsContext';
import getPlanets from '../service/api';

const TableBody = () => {
  const { data, setData, fetching, setFetching } = useContext(SWContext);
  useEffect(() => {
    setFetching(true);
    getPlanets().then(
      (json) => {
        setData(json.results);
        setFetching(false);
      },
      (error) => {
        setData(error);
        setFetching(false);
      },
    );
  }, []);
  if (fetching === true) return <tbody>Loading..</tbody>;
  if (data.length > 1) {
    const planets = data;
    return (
      <tbody>
        {planets.map((planet) => (
          <tr key={`${planet.name} index`}>
            {Object.keys(data[0])
              .filter((keys) => keys !== 'residents')
              .map((objKey) => (
                <td key={`${objKey} index 2`}>{planet[objKey]}</td>
              ))}
          </tr>
        ))}
      </tbody>
    );
  }
  return null;
};

export default TableBody;
