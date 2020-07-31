import React, { createContext, useState /* useEffect */ } from 'react';
import propTypes from 'prop-types';

const StarWarsContext = createContext();

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
export const initialFilterStare = {
  filteByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

export const SWProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setfetchError] = useState('');
  const [filteredData, setFilterData] = useState(data);

  const fetchData = () => fetch(URL)
    .then(async (resp) => {
      setIsFetching(true);
      try {
        const json = await resp.json();
        setData(json.results);
        setFilterData(json.results);
        setIsFetching(false);
      } catch (e) {
        setfetchError(e);
        setIsFetching(false);
      }
    });

  const context = {
    fetchData,
    fetchError,
    filteredData,
    isFetching,
    setData,
  };
  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

SWProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default StarWarsContext;
