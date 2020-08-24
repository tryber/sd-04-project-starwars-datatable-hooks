function filterFunc(planets, name, numericValues) {
  // console.log('data', planets);
  // console.log('byName', name);
  // console.log('Values', numericValues);
  return numericValues.length === 0
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
      );
}

export default filterFunc;
