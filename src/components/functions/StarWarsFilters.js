const starWarsFilter = (dataPlanets, name) => {
  return dataPlanets.filter((planet) => planet.name.includes(name))
};

export default starWarsFilter;