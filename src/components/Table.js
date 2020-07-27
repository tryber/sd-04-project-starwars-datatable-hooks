import React, { useContext } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import StartWarsContext from '../context/StarWarsContext';

function Table() {
  const { isFetching } = useContext(StartWarsContext);
  if (isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <table>
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
