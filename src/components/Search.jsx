import React, { useEffect, useContext } from 'react';
import FilterName from './FilterName';
import FilterByComparison from './FilterByComparison';
import { StarWarsContext } from '../context/starWarsContext';
import planetsAPI from '../services/starWarsAPI';

const Search = () => {
  const { planets, setPlanets } = useContext(StarWarsContext);

  useEffect(() => {
    async function fetchPlanets() {
      setPlanets({ ...planets, loading: true });
      return planetsAPI().then((data) => setPlanets({ data: data.results, loading: false }));
    }
    fetchPlanets();
  }, []);

  return (
    <div>
      <div>
        <FilterName />
      </div>
      <div>
        <h5>Filtro:</h5>
        <FilterByComparison />
      </div>
    </div>
  );
};

export default Search;
