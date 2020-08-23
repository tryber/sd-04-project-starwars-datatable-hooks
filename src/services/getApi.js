const url = 'https://swapi.dev/api/planets';
const getPlanetsApi = () =>
  fetch(url).then((response) =>
    response
      .json()
      .then(data =>
        response.ok ? Promise.resolve(data.results) : Promise.reject(data),
      ),
  );

export default getPlanetsApi;
