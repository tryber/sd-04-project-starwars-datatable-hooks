import React, { useState } from 'react';

import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const handleSearch = (text) => {
    setFilterByName({ name: text });
  };
  const context = {
    data,
    setData,
    loading,
    setLoading,
    filterByName,
    setFilterByName,
    handleSearch,
  };

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

export default StarWarsProvider;
