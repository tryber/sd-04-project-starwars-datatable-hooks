// Copiado do projeto anterior
const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
const getPlanets = () => (
  fetch(url)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);


export default getPlanets;