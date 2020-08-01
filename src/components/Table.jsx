import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

import TableTop from './TableTop';
import TableBody from './TableBody';

const getFiltered = (data, nameFilter, numericValues) => {
  let dataFiltered = [...data];
  if (numericValues.length > 0) {
    numericValues.map(({ column, comparison, value }) => {
      switch (comparison) {
        case 'igual a':
          return (dataFiltered = dataFiltered.filter(
            (planet) => Number(planet[column]) === Number(value),
          ));
        case 'maior que':
          return (dataFiltered = dataFiltered.filter(
            (planet) => Number(planet[column]) > Number(value),
          ));
        case 'menor que':
          return (dataFiltered = dataFiltered.filter(
            (planet) => Number(planet[column]) < Number(value),
          ));

        default:
          return false;
      }
    });
  }
  if (nameFilter) {
    return data.filter((planet) => planet.name.includes(nameFilter));
  }
  return dataFiltered;
};

const Table = () => {
  const { data, fetching, swApi, nameFilter, numericValues } = useContext(
    StarWarsContext,
  );

  useEffect(() => {
    swApi();
  }, []);

  if (fetching) return <p>Loading...</p>;
  return (
    <table>
      <TableTop />
      <TableBody planets={getFiltered(data, nameFilter, numericValues)} />
    </table>
  );
};

export default Table;
