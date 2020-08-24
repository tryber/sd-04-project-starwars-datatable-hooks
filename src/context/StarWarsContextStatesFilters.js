const StarWarsContextStatesFilters = (filters, filter, action) => {
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
      };
    case 'REMOVEFILTER':
      return {
        ...filters,
        filterByNumericValues: filters.filterByNumericValues.filter(
          ({ column }) => column !== filter.column,
        ), // filterByNumericValues, sem a  coluna clicada para excluir
      };
    default:
      return filters;
  }
};

export default StarWarsContextStatesFilters;
