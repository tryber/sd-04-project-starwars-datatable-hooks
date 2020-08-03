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

  const handleFilterByNumber = (filter) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [...prevState.filterByNumericValues, filter],
    }));
  };

  const handleFilterByOrder = (filter) => {
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
          (numericFilter) => numericFilter.column !== filter.column,
        ),
      ],
    }));
  };

  const context = {
    filters,
    handleFilterByName,
    handleFilterByNumber,
    handleFilterByOrder,
    handleFilterRemoval,
  };

  return <FiltersContext.Provider value={context}>{children}</FiltersContext.Provider>;
};

export default FiltersContext;
