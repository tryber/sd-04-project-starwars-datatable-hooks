import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filteredData, setDataFiltered] = useState([]);
  const [filters, setFilters] = useState({});
  const [filterByName, setSearch] = useState({ name: '' });
  const [filterByNumericValues, setByNumericValues] = useState([]);
  const [objFilters, setObjFilters] = useState({});

  const handleFilter = (event) => {
    event.preventDefault();
    setByNumericValues((prevState) => [
      ...prevState,
      objFilters,
    ]);
  };

  const selectedFilters = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setObjFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clearFilter = (columnRemove) => {
    setByNumericValues(filterByNumericValues.filter(({column}) => column !== columnRemove));
  };

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
        const { results } = await request.json();
        await setData(results);
        await setLoading(false);
      } catch (error) { console.log('Algo deu errado', error); }
    })();
  }, []);

  useEffect(() => {
    setFilters((prevState) => ({
      ...prevState,
      filterByName,
      filterByNumericValues,
    }));

    setDataFiltered(
      data.filter((planets) => (
        planets.name.toLowerCase().indexOf(filterByName.name.toLowerCase()) !== -1))
        .map((planet) => planet),
    );
  }, [filterByName, data, filterByNumericValues]);

  const handleCurrentData = (event) => {
    event.preventDefault();

    setSearch({
      name: event.target.value,
    });
  };

  const stateValue = {
    data,
    isLoading,
    handleCurrentData,
    filters,
    filterByName,
    filteredData,
    selectedFilters,
    handleFilter,
    filterByNumericValues,
    clearFilter,
  };

  return (
    <StarWarsContext.Provider value={stateValue}>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default StarWarsProvider;
