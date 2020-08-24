const StarWarsContextStatesFilters = (filters, filter, action) => {
 console.log(filter)
  switch (action) {
    case 'NAME':
      return {
        ...filters,
        filterByName: { name: filter.name },
      };
    case 'NUMERICVALUES':
      return {
        ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          {
            column: filter.column,
            comparison: filter.comparison,
            value: filter.value,
          },
        ],
      }  
    default:
      return filters;
  }
};

export default StarWarsContextStatesFilters;
