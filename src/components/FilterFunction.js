const filteredDataFunc = (data, filterByName, filterByNumericValues) => {
  let planets = [...data];
  if (filterByName.name.length > 0) {
    planets = planets.filter((planet) => planet.name.includes(filterByName.name));
  }
  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      planets = planets.filter((planet) => {
        if (comparison === 'menor que') return Number(planet[column]) < Number(value);
        if (comparison === 'igual a') return Number(planet[column]) === Number(value);
        if (comparison === 'maior que') return Number(planet[column]) > Number(value);
        return null;
      });
    });
  }
  return planets;
};

export default filteredDataFunc;
