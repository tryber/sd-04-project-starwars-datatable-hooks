import { useEffect, useContext } from 'react';
import apiPlanets from '../services/index';
import StarWarsContext from '../context/StarWarsContext';

const usePlanets = () => {
  const { data, setData, setIsFetching, setError } = useContext(
    StarWarsContext
  );

  useEffect(() => {
    loadData()
      .then((data) => setData(data.results))
      .then(() => setIsFetching(false))
      .catch((err) => setError(err));
  }, []);

  const loadData = async () => {
    setIsFetching(true);
    const data = await apiPlanets();
    return data;
  };

  return data;
};

export default usePlanets;
