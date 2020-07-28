import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

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

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SWContext, SWProvider };
