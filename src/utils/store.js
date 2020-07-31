import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import requestAPI from './APIrequest';

const StoreProvider = createContext();

export function Store({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumeric] = useState([]);
  const [order, setOrder] = useState({ column: 'name', sort: 'ASC', })
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
  // Hooks que funciona como componenteDidMount chamando
  // a request da API quando o componente é montado
  useEffect(() => {
    async function request() {
      const response = await requestAPI('https://swapi.dev/api/planets/');
      setPlanets(response.results);
    }
    request();
  }, []);
  return (
    <StoreProvider.Provider value={context}>
      {children}
    </StoreProvider.Provider>
  );
}

export default StoreProvider;

Store.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
