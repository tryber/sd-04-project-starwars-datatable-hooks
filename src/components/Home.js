import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from './Table';
import Filter from './Filter';

const Home = () => {
  const { filteredData, isFetching, fetchData } = useContext(StarWarsContext);
  useEffect(() => {
    fetchData();
  }, []);

  return (filteredData.length > 0 && !isFetching
    ? (
      <div className="App">
        <Filter />
        <Table />
      </div>
    )
    : <h1>Sem planetas encontrados</h1>
  );
};

export default Home;
