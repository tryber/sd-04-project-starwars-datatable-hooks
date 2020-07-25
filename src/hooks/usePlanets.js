import { useEffect, useContext, useState } from 'react';
import { StarWarsContext } from '../contexts/StarWarsContext';
import getData from '../services/api';

const usePlanets = () => {
  const { planets, setPlanets } = useContext(StarWarsContext);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      data.results.forEach((planet) => {
        // eslint-disable-next-line no-param-reassign
        delete planet.residents;
      });
      setPlanets(data.results);
      setHeaders(Object.keys(data.results[0]));
    });
  }, [setPlanets]);

  return [
    [planets, setPlanets],
    [headers, setHeaders],
  ];
};

export default usePlanets;
