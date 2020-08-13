import React, { useContext } from 'react';
import { StarsWarsContext } from '../context/StarWarsContext';

/* 
Esta função foi feito 
com a ajuda do colega/amigo
Frederico Campello turma 04
*/

const numericKeys = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

// const ascSortNumber = (filtered, collum) =>
//   filtered.sort((a, b) => Number(a[collum]) - Number(b[collum]));

// const ascSortString = (filtered, col) =>
//   filtered.sort((a, b) => {
//     if (a[col] > b[col]) return 1;
//     if (a[col] < b[col]) return -1;
//     return 0;
//   });

function orderAscDesc(filtered, colum) {
  const { filters } = useContext(StarsWarsContext);

  if (numericKeys.includes(filters.order.column)) {
    filtered.sort((a, b) => Number(a[colum]) - Number(b[colum]));
  } else {
    filtered.sort((a, b) => {
      if (a[colum] > b[colum]) return 1;
      if (a[colum] < b[colum]) return -1;
      return 0;
    });
  }
  return filters.order.sort === 'DESC' ? filtered.reverse() : filtered;
}

export default orderAscDesc;
