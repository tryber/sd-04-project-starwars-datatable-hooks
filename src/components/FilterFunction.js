const sortLines = (planets, order) => {
  const { column, sort } = order;
  let sortPlanets = planets;
  const filterCol = column.toLowerCase();
  if (filterCol === 'name' || filterCol === 'climate' || filterCol === 'terrain') {
    sortPlanets = sortPlanets
      .sort((a, b) => ((a[filterCol]).toLowerCase()).localeCompare((b[filterCol]).toLowerCase()));
  }
  if (sort === 'ASC') sortPlanets = sortPlanets.sort((a, b) => a[column] - b[column]);
  if (sort === 'DESC') sortPlanets = sortPlanets.sort((a, b) => b[column] - a[column]);
  return sortPlanets;
}

const filteredDataFunc = (data, filterByName, filterByNumericValues, order) => {
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
  return sortLines(planets, order);
};

export default filteredDataFunc;
