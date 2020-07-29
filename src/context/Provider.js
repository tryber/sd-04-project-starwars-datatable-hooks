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
  const handleNumericFilter = (value) => {
    setfilterByNumericValues([
      ...filterByNumericValues,
      {
        column: value.column.value,
        comparison: value.comparison.value,
        value: value.number.value,
      },
    ]);
    setColumns([...columns].filter((coluna) => coluna !== value.column.value));
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
