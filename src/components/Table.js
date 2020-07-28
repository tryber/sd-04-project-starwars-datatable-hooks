import React, { useContext } from 'react';
import StarWarContext from '../context/StarWarsContext'; // para ter acesso ao consumer.
import HeadTable from './HeadTable';
import BodyTable from './BodyTable';

const Table = () => {
  const {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
  } = useContext(StarWarContext);
  const toFilterPlanets = () => {
    const filterName = data.filter((planet) => planet.name.toLowerCase().includes(name));
    if (filterByNumericValues.length > 0) {
      return filterByNumericValues.reduce(
        (newList, { column, comparison, value }) =>
          newList.filter((planet) => {
            if (comparison === 'maior que') return Number(planet[column]) > Number(value);
            if (comparison === 'igual a') return Number(planet[column]) === Number(value);
            if (comparison === 'menor que') return Number(planet[column]) < Number(value);
            return planet;
          }),
        filterName,
      );
    }
    return filterName;
  };

  return (
    <table>
      <thead>
        <HeadTable />
      </thead>
      <tbody>
        {toFilterPlanets().map((planet) => (
          <BodyTable key={planet.name} planet={planet} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
