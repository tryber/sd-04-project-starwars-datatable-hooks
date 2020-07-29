const url = 'https://swapi.dev/api/planets/';

const apiPlanets = async () => {
  const response = await fetch(url);
  const json = await response.json();
  const data = await (response.ok) ? Promise.resolve(json) : Promise.reject(json);
  return data;
}

export default apiPlanets;
