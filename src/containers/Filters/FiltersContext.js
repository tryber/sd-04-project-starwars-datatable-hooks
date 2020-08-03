import React, { useState } from 'react';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: { column: 'Name', sort: 'ASC' },
};

const FiltersContext = React.createContext(initialState);

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState(initialState);

  const handleFilterByName = (search) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByName: {
        name: search,
      },
    }));
  };

  const handleNumericFilter = (filter) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [...prevState.filterByNumericValues, filter],
    }));
  };

  const handleOrderFilter = (filter) => {
    setFilters((prevState) => ({
      ...prevState,
      order: { ...prevState.order, ...filter },
    }));
  };

  const handleFilterRemoval = (filter) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [
        ...prevState.filterByNumericValues.filter(
          (numericFilter) => numericFilter.colunm !== filter.colunm
        ),
      ],
    }));
  };

  const context = {
    filters,
    handleFilterByName,
    handleNumericFilter,
    handleOrderFilter,
    handleFilterRemoval,
  };

  return <FiltersContext.Provider value={context}>{children}</FiltersContext.Provider>;
};

export default FiltersContext;
