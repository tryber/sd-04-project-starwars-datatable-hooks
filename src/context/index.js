import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const starContext = createContext();

const StarProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({
    column: 'Name',
    sort: 'ASC',
  });

  const context = {
    data,
    setData,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    order,
    setOrder,
  };
  return (
    <starContext.Provider value={context}>
      {children}
    </starContext.Provider>
  );
};

StarProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default StarProvider;
