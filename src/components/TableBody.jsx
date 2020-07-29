import React, { useContext, useEffect } from 'react';
import SWContext from '../context/StarWarsContext';
import getPlanets from '../service/api';
import { compare } from '../util/index';

const TableBody = () => {
  const { data, setData, fetching, setFetching, filterByName, filterByNumericValues } = useContext(
    SWContext,
  );
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
    let planets = data;
    if (filterByName.name !== '') {
      planets = planets.filter((planet) => planet.name.includes(filterByName.name));
    }
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach((filter) => {
        const { column, comparison, value } = filter;
        planets = planets.filter((planeta) => compare(planeta, column, comparison, value));
      });
    }
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
