import React, { useState } from 'react';

import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = {
    data,
    setData,
    loading,
    setLoading,
  };
  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

export default StarWarsProvider;
