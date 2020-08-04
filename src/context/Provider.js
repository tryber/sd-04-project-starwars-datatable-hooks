import PropTypes from 'prop-types';
import React, { useState } from 'react';

import SWContext from './StarWarsContext';

const SWProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);
  const [columns, setColumns] = useState([
    'Column',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const handleSearchText = (text) => {
    setFilterByName({ name: text });
  };
  const handleNumericFilter = (column, comparison, number) => {
    setfilterByNumericValues([
      ...filterByNumericValues,
      {
        column,
        comparison,
        value: number,
      },
    ]);
    setColumns([...columns].filter((coluna) => coluna !== column));
  };
  const context = {
    data,
    setData,
    fetching,
    setFetching,
    columns,
    handleSearchText,
    filterByName,
    filterByNumericValues,
    setfilterByNumericValues,
    handleNumericFilter,
  };
  return <SWContext.Provider value={context}>{children}</SWContext.Provider>;
};

SWProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SWProvider;
