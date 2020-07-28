import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [textInput, setTextInput] = useState('');
  const [planetsData, setPlanetsData] = useState({
    isFetching: false,
    data: [],
  });
  const [filtersNumeric, setFiltersNumeric] = useState([]);

  const context = {
    textInput,
    setTextInput,
    planetsData,
    setPlanetsData,
    filtersNumeric,
    setFiltersNumeric,
  };

  useEffect(() => {
    async function fetchData() {
      setPlanetsData({ ...planetsData, isFetching: true });
      const APIURL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(`${APIURL}`);
      response
        .json()
        .then((data) => {
          setPlanetsData({ ...planetsData, data: data.results, isFetching: false });
        })
        .catch((error) => console.log(error));
    }
    console.log('inside useEffect fetch');
    fetchData();
  }, []);

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.string,
};

StarWarsProvider.defaultProps = {
  children: null,
};

export default StarWarsProvider;

export function useStarWars() {
  const context = useContext(StarWarsContext);
  return context;
}
