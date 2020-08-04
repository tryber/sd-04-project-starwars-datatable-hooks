const PLANETS_API = 'https://swapi.dev/api';

const getStarsWarsPlanets = () => (
  fetch(`${PLANETS_API}/planets`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getStarsWarsPlanets;
