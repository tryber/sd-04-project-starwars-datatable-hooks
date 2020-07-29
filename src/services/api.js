const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const urlAlternate = 'https://swapi.dev/api/planets/';

export default function getPlanets() {
  return fetch(urlAlternate).then((response) =>
    response
      .json()
      .then((planets) => (response.ok ? Promise.resolve(planets) : Promise.reject(planets))),
  );
}
