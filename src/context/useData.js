import { useContext, useEffect } from 'react';
import getPlanets from '../services/api';
import { SWcontext } from './SWcontext';

const useData = () => {
  const { setData, setIsLoading, setError, isLoading, data } = useContext(SWcontext);
  // useContext serve para deixar menos verboso e nestting o CONSUMO do contextAPI.

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
// A função passada dentro do useEffect é chamada TODA VEZ que o componente é renderizado
// os parametros passados no final, condiciona que a função dentro do useEffect,
// é executada apenas quando esses parametros são alterados.

  return { data, isLoading };
};

export default useData;