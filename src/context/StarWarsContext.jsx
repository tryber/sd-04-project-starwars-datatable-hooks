import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import swApi from '../services/swApi';

const StarWarsContext = createContext();

const SWProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [nameFilter, setNameFilter] = useState('');
  const [value, setValue] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [numericValues, setNumericValues] = useState([]);

  const requestSucess = (res) => {
    setData(res.results);
    setFetching(false);
  };
  const requestPlanets = () => {
    if (!fetching) return null;
    setFetching(true);
    return swApi().then(requestSucess);
  };

  const setFilterByNum = (a, b, c) => {
    setNumericValues([
      ...numericValues,
      { column: a, comparison: b, value: c },
    ]);
  };

  const context = {
    data,
    setData,
    fetching,
    setFetching,
    swApi: requestPlanets,
    nameFilter,
    setNameFilter,
    value,
    setValue,
    column,
    setColumn,
    comparison,
    setComparison,
    numericValues,
    setNumericValues,
    setFilterByNum,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarWarsContext, SWProvider };
