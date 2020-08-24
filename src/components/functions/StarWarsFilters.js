const orderPlanet = (columnFilter, sort, planets) => {
  const column = columnFilter.toLowerCase();
  const sortPlanets = [...planets];
  if (!Number(sortPlanets[0][column])) {
    sortPlanets.sort(function (a, b) {
      const item = a[column];
      const itemProx = b[column];

      if (item < itemProx) {
        return -1;
      }
      if (item > itemProx) {
        return 1;
      }
      return 0;
    });
  } else {
    sortPlanets.sort(function (a, b) {
      return a[column] - b[column];
    });
  }

  return sort === 'ASC' ? sortPlanets : sortPlanets.reverse();
};

const starWarsFilterNumericValue = (
  accumulator,
  { column, comparison, value }
) =>
  accumulator.filter((planet) => {
    switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > Number(value);
      case 'menor que':
        return Number(planet[column]) < Number(value);
      default:
        return Number(planet[column]) === Number(value);
    }
  });

const starWarsFilter = (dataPlanets, filters) => {
  const { filterByName, filterByNumericValues, order } = filters;
  const { name } = filterByName;
  const { column, sort } = order;

  const resultPlanets =
    filterByNumericValues.length === 0
      ? dataPlanets
      : filterByNumericValues.reduce(starWarsFilterNumericValue, dataPlanets);

  const planetsFilter = resultPlanets.filter((planet) =>
    planet.name.includes(name)
  );
  return orderPlanet(column, sort, planetsFilter);
};

export default starWarsFilter;
