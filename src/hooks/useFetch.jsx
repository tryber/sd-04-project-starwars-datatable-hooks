import { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const useFetch = () => {
  const [store, setStore] = useContext(StarWarsContext);

  const request = async (url) => {
    try {
      setStore({ ...store, apiRequest: { loading: true } });
      const response = await fetch(url);
      const json = await response.json();
      setStore({
        ...store,
        apiRequest: {
          ...store.apiRequest,
          loading: false,
          headers: Object.keys(json.results[0]).filter(
            (item) => item !== 'residents',
          ),
          data: json.results,
          error: '',
        },
      });
    } catch (error) {
      setStore({
        ...store,
        apiRequest: {
          ...store.apiRequest,
          loading: false,
          error: `Erro ao carregar a pagina - ${error}`,
        },
      });
    }
  };

  return request;
};

export default useFetch;
