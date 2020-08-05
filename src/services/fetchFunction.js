const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fecthFunction = () => fetch(URL).then((response) => response.json());

export default fecthFunction;
