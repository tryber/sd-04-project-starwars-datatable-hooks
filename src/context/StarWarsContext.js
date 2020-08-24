import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [order, setOrder] = useState({
    order: { column: 'Name', sort: 'ASC' },
  });

  const [data, setData] = useState([{}]);
  const context = {
    loading,
    setLoading,
    data,
    setData,
    filterByNumericValues,
    setFilterByNumericValues,
    filterByName,
    setFilterByName,
    order,
    setOrder,
  };
  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};
StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export { StarWarsContext, StarWarsProvider };
