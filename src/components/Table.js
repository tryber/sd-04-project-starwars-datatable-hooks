import React, { useContext } from 'react';
import StarWarContext from '../context/StarWarsContext'; // para ter acesso ao consumer.
import HeadTable from './HeadTable';
import BodyTable from './BodyTable';

const Table = () => {
  const {
    data,
    filters: {
      filterByName: { name },
    },
  } = useContext(StarWarContext);

  const toFilterPlanets = () => {
    const filterName = data.filter((planet) => planet.name.toLowerCase().includes(name));
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
