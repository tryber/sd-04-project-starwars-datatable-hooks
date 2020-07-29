const url = 'https://swapi.dev/api/planets/';

const apiPlanets = async () => await fetch(url).then((response) => response.json())

export default apiPlanets;
