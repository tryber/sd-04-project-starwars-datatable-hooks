import { useContext, useEffect } from 'react';
import { StarWarsContext } from './StarWarsContext';
import getPlanets from '../services/planetsAPI';

const useData = () => {
  const { setData, setIsLoading, setError, isLoading, data } = useContext(StarWarsContext);

  useEffect(() => {
    setIsLoading(true);
    getPlanets().then(
      (json) => {
        setData(json.results);
        setIsLoading(false);
      },
      (error) => {
        setError(error);
        setIsLoading(false);
      },
    );
  }, [setData, setIsLoading, setError]);

  return { data, isLoading };
};

export default useData;
