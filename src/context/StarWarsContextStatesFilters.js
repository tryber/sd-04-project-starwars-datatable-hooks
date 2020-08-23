const StarWarsContextStatesFilters = (filters, filter, action) => {
  switch (action) {
    case 'NAME':
      return {
        ...filters,
        filterByName: { name: filter.name },
      };

    default:
      return filters;
  }
};

export default StarWarsContextStatesFilters;
