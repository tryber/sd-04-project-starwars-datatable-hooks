// const URL = 'https://swapi-trybe.herokuapp.com/api/planets';
const URL2 = 'https://swapi.dev/api/planets';
const getPlanet = () => (
  fetch(URL2)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getPlanet;
