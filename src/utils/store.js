import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import requestAPI from './APIrequest';

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [name, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumeric] = useState([]);
  const [order, setOrder] = useState({ column: 'name', sort: 'ASC' });
  // Hooks que funciona como componenteDidMount chamando
  // a request da API quando o componente é montado
  useEffect(() => {
    async function request() {
      const response = await requestAPI('https://swapi.dev/api/planets/');
      setPlanets(response.results);
    }
    request();
  }, []);
  const context = {
    planets,
    filters: {
      filterByName: name,
      filterByNumericValues,
      order,
      setFilterByNumeric,
      setFilterByName,
      setOrder,
    },
  };
  return (
    <StoreContext.Provider value={context}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
