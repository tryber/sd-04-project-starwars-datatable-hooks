import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

// export const SEARCH_BEGIN = 'SEARCH_BEGIN';
// export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
// export const SEARCH_ERROR = 'SEARCH_ERROR';

// export const searchBegin = () => ({ type: SEARCH_BEGIN, loading: true });

// export const searchSuccess = (data) => ({
//   type: SEARCH_SUCCESS,
//   loading: false,
//   data,
// });

// export const searchFailure = (error) => ({
//   type: SEARCH_ERROR,
//   loading: false,
//   error,
// });
const GetPlanets = () => {



  async function fetchData() {
    const APIURL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    
    const res = await fetch(`${APIURL}`);
    res
    .json()
    .then(res => console.log((res)))
    .catch(err => console.log((err)));
  }
  return ;

};
export default GetPlanets;

