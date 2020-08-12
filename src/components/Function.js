function FiltersFunc(planets, name) {
  return planets.filter((planet) => planet.name.includes(name))
}

const dataOrganization = (planets, name) => {
  const data = FiltersFunc(planets, name);
  return data;
};

export default dataOrganization;
