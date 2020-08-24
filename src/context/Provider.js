import PropTypes from "prop-types";
import React, { useState } from 'react';

import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({
    column: 'Name',
    sort: 'ASC',
  });
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
    filterByNumericValues,
    setfilterByNumericValues,
    order,
    setOrder,
  };
  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default StarWarsProvider;
