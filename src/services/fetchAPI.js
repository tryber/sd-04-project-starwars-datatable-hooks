const api = 'https://swapi.dev/api/planets/';

export default function apiPlanets() {
  return fetch(api).then((response) =>
    response
      .json()
      .then((planets) => (response.ok ? Promise.resolve(planets) : Promise.reject(planets))),
  );
}
