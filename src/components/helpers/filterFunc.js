const filterFunc = (planets, name, numericValues) => (
  numericValues.length === 0
    ? planets.filter((planet) => planet.name.includes(name))
    : numericValues.reduce(
        (acc, { column, comparison, number }) =>
          acc.filter((planet) => {
            switch (comparison) {
              case 'maior que':
                return planet.name.includes(name) && Number(planet[column]) > Number(number);
              case 'menor que':
                return planet.name.includes(name) && Number(planet[column]) < Number(number);
              case 'igual a':
                return planet.name.includes(name) && Number(planet[column]) === Number(number);
              default:
                return planet.name.includes(name);
            }
          }),
        planets,
      )
);

export default filterFunc;
