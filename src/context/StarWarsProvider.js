import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filteredData, setDataFiltered] = useState([]);
  const [filters, setFilters] = useState({});
  const [filterByName, setSearch] = useState({ name: '' });

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
    }));

    setDataFiltered(
      data.filter((planets) => (
        planets.name.toLowerCase().indexOf(filterByName.name.toLowerCase()) !== -1))
        .map((planet) => planet),
    );
  }, [filterByName, data]);

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
  };

  return (
    <StarWarsContext.Provider value={stateValue}>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default StarWarsProvider;
