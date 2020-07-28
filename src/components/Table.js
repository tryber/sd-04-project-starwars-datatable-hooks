import React, { useContext } from 'react';
import StarWarContext from '../context/StarWarsContext'; // para ter acesso ao consumer.
import HeadTable from './HeadTable';
import BodyTable from './BodyTable';

const Table = () => {
  const { toFilterPlanets } = useContext(StarWarContext);

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
