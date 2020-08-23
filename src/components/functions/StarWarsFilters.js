const starWarsFilter = (dataPlanets, name) => (
  dataPlanets.filter((planet) => planet.name.includes(name))
);

export default starWarsFilter;
