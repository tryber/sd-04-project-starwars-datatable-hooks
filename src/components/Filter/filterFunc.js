const filterFunc = (planets, text, numericValues) => (
  numericValues.length === 0
    ? planets.filter((planet) => planet.name.includes(text))
    : numericValues.reduce(
      (acc, { column, comparison, value }) => acc.filter(
        (planet) => {
        switch (comparison) {
          case 'maior que':
            return (
              planet.name.includes(text)
                && parseFloat(planet[column]) > parseFloat(value)
            );
          case 'menor que':
            return (
              planet.name.includes(text)
                && parseFloat(planet[column]) < parseFloat(value)
            );
          case 'igual a':
            return (
              planet.name.includes(text)
                && parseFloat(planet[column]) === parseFloat(value)
            );
          default:
            return planet.name.includes(text);
        }
      }),
      planets,
    )
);

export default filterFunc;
