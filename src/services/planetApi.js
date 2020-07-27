const APIURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetAPI = () => console.log('here planet API');
fetch(`${APIURL}`).then((response) =>
  response
    .json()
    .then((json) =>
      response.ok ? Promise.resolve(json) : Promise.reject(json),
    ),
);

export default planetAPI;
