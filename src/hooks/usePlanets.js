import { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import getPlanets from '../services/apiPlanets';

export default function usePlanets() {
  const {
    data,
    setData,
    isFetching,
    setIsFetching
  } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanets().then((planets) => {
      setData(planets.results);
      setIsFetching(false);
    });
  }, []);

  return {
    data,
    isFetching,
  };
}
