const axios = require('axios');

const getPlanets = () => {
  axios
    .get('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default getPlanets;
