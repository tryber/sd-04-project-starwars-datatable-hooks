// import axios from 'axios';

export default function apiRequest(endpoint) {
  return fetch(
    `https://swapi-trybe.herokuapp.com/api/${endpoint}/`,
  ).then((response) => response
    .json()
    .then(
      (data) => (response.ok ? Promise.resolve(data.results) : Promise.reject(data)),
    ));
}

// export default (endpoint) => axios
//   .get(
//     `https://swapi-trybe.herokuapp.com/api/${endpoint}/`,
//   ).then((response) => response.data.results)
//   .catch((error) => (error));
