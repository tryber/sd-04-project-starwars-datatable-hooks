const getPlanets = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets';
  const results = await fetch(URL);
  return results.json()
}

export { getPlanets };
