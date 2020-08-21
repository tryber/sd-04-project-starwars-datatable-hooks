const funcFilterByNumericValues = (planets, name, numericValues) => (
  numericValues.length === 0
    ? planets.filter((planet) => planet.name.includes(name))
    : numericValues.reduce(
        (acc, { column, comparison, value }) =>
          acc.filter((planet) => {
            switch (comparison) {
              case 'maior que':
                return planet.name.includes(name) && Number(planet[column]) > Number(value);
              case 'menor que':
                return planet.name.includes(name) && Number(planet[column]) < Number(value);
              case 'igual a':
                return planet.name.includes(name) && Number(planet[column]) === Number(value);
              default:
                return planet.name.includes(name);
            }
          }),
        planets,
      ));

/* const orderBy = (data) => {
  if (!data.length) return [];
  const planetKey = filters.order.column.toLowerCase();
  if (isNaN(data[0][planetKey])) {
    data.sort((a, b) => (a[planetKey] > b[planetKey] ? 1 : -1));
  } else {
    data.sort((a, b) => a[planetKey] - b[planetKey]);
  }
  if (filters.order.sort === 'DESC') data.reverse();
  return data;
}; */

export default funcFilterByNumericValues;
