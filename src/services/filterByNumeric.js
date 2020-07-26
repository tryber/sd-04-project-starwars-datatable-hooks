export function setNumericFilterVariables(filter, state, setData) {
  setData({
    ...state,
    filterByNumericValues: [
      ...state.filterByNumericValues,
      {
        column: filter.column,
        comparison: filter.comparison,
        value: filter.value,
      },
    ],
  });
}

const applyNumericFilters = (planets, filters) => {
  let filteredPlanets = planets;
  filters.forEach((filter) => {
    const { column, comparison, value } = filter;
    filteredPlanets = filteredPlanets.filter((planet) => {
      if (comparison === 'maior que') return Number(planet[column]) > Number(value);
      if (comparison === 'menor que') return Number(planet[column]) < Number(value);
      if (comparison === 'igual a') return Number(planet[column]) === Number(value);
      return null;
    });
  });
  return filteredPlanets;
};

export const setPlanetsFilteredByNumeric = (state, setData) => {
  const planets =
    state.filterByNumericValues.length === 0 ? state.planetsData : state.filteredPlanets;
  const filteredPlanets = applyNumericFilters(planets, state.filterByNumericValues);
  setData({
    ...state,
    filteredPlanets,
  });
};

export const removeFilter = (filterToRemove, state, setData) => {
  const newFilteredByNumericValues = state.filterByNumericValues.filter(
    ({ column }) => column !== filterToRemove.column,
  );
  setData({
    ...state,
    filterByNumericValues: newFilteredByNumericValues,
  });
};
