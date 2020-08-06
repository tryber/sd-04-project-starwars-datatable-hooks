import { useEffect, useContext } from 'react';
import apiPlanets from '../services/index';
import StarWarsContext from '../context/StarWarsContext';

const usePlanets = () => {
  const { data, setData, setIsFetching, setError } = useContext(StarWarsContext);

  const loadData = async () => {
    setIsFetching(true);
    const dataPlanets = await apiPlanets();
    return dataPlanets;
  };

  useEffect(() => {
    loadData()
      .then((dataPlanets) => setData(dataPlanets.results))
      .then(() => setIsFetching(false))
      .catch((err) => setError(err));
  }, []);

  return data;
};

export default usePlanets;
