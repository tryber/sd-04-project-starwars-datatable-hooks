const url = 'https://swapi.dev/api/planets/';

const apiPlanets = () => fetch(url).then((response) => response.json());

export default apiPlanets;
