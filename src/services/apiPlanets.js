const getPlanets = () => fetch('https://swapi.dev/api/planets/')
  .then((data) => data.json())
  .catch((err) => { console.log("esse é o erro: " + err); });

export default getPlanets;
