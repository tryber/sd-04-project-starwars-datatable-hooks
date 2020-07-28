const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function getPlanets() {
  return fetch(url).then((response) =>
    response
      .json()
      .then((planets) => (response.ok ? Promise.resolve(planets) : Promise.reject(planets))),
  );
}
