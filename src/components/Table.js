import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import TableHead from './TableHead';
import TableBody from './TableBody';

const keysHeader = (data) => {
  const keys = Object.keys(data[0]).filter((info) => info !== 'residents');
  return keys;
};

const keysBody = (data) => {
  const keys = data.map((planet) => (
    Object.values(planet).filter((info, index) => index !== 9 && (info))
  ));
  console.log(keys);
  return keys;
};

const Table = () => {
  const { data } = useContext(StarWarsContext);
  let dataKeysHead = [];
  let dataKeysBody = [];
  if (data.length) {
    dataKeysHead = keysHeader(data);
    dataKeysBody = keysBody(data);
  }

  return (
    <div>
      <table>
        <TableHead keys={dataKeysHead} />
        <TableBody keys={dataKeysBody} />
      </table>
      <button onClick={() => console.log(data)}>Consola Data</button>
    </div>
  );
};

export default Table;
