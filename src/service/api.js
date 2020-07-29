// const SW_BASE_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
const SW_SECOND_API = 'https://swapi.dev/api/planets/';

const getPLanets = () =>
  fetch(SW_SECOND_API).then((data) =>
    data.json().then((json) => (data.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export default getPLanets;
