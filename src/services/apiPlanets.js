const getApi = () => fetch('https://swapi.dev/api/planets/')
  .then((data) => data.json())
  .then((json) => json)
  .catch((err) => { throw err });

export default getApi;
