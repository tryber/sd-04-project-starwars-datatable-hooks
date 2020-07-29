// const apiURL = 'https://swapi-trybe.herokuapp.com/api/planets/';
const apiURL = 'https://swapi.dev/api/planets';

const getPlanets = async () => {
  const response = await fetch(apiURL);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

export default getPlanets;
