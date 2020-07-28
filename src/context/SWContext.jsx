import React, { createContext, useState } from 'react';

const SWContext = createContext();

const filters = {
  filterByName: {
    name: '',
  },
};

const SWProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [filter, setFilter] = useState(filters);

  const filterByName = (name) => {
    setFilter({ filterByName: { name } });
  };

//   const filteredByName = [...data].filter((planet) =>
//   planet.name.includes(filter.filteredByName.name)
// );

  const context = {
    data,
    setData,
    fetching,
    setFetching,
    filter,
    setFilter,
    filterByName,
    // filteredByName
  };

  return <SWContext.Provider value={context}>{children}</SWContext.Provider>;
};

export { SWContext, SWProvider };
