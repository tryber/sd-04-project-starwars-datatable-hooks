const starWarsFilterNumericValue = (
  accumulator,
  { column, comparison, value, }
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
  const { filterByName, filterByNumericValues } = filters;
  const { name } = filterByName;

  const resultPlanets =
    filterByNumericValues.length === 0
      ? dataPlanets
      : filterByNumericValues.reduce(starWarsFilterNumericValue, dataPlanets);

  return resultPlanets.filter((planet) => planet.name.includes(name));
};

export default starWarsFilter;
