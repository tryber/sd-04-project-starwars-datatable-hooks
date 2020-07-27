import { useContext, useEffect } from 'react';
import { StarWarsContext } from './StarWarsContext';
import getPlanets from '../services/api';

const useData = () => {
  const { setData, setIsLoading, setError, isLoading, data } = useContext(StarWarsContext);

  useEffect(() => {
    console.log('aaaaaaaaaaaaaaaaaa');
    setIsLoading(true);
    getPlanets().then(
      (data) => {
        setData(data.results);
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
