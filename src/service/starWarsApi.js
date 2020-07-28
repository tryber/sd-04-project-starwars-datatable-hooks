export default function requestFromApi() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets')
    .then((response) => response.json());
}
