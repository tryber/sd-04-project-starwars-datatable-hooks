import React, { useState, useEffect } from 'react';
import apiPlanets from '../services/index';
import StarWarsContext from './StarWarsContext';

const INITIAL_STATE_FILTERS = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const Provider = ({ children }) => { 
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filter, setFilter] = useState(INITIAL_STATE_FILTERS);

  useEffect(() => {
    loadData().then((data) => setData(data.results));
  }, [] )
  
  const loadData = async () => {
    const data  = await apiPlanets();
    return data;
  }

  const contextValue ={
    data,
    setData,
    isFetching,
    setIsFetching,
    filter,
    setFilter
  }

  return (
    <StarWarsContext.Provider value={contextValue}>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;
