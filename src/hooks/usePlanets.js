import { useEffect, useContext, useState, useMemo, useCallback } from 'react';
import { compile, format } from 'date-and-time';
import { v4 } from 'uuid';
import { StarWarsContext } from '../contexts/StarWarsContext';
import getData from '../services/api';

const datePattern = compile('DD/MM/YYYY');

const usePlanets = () => {
  const { planets, setPlanets } = useContext(StarWarsContext);
  const [headers, setHeaders] = useState([]);

  const films = useMemo(
    () => ({
      1: '1 - The Phantom Menace',
      2: '2 - Attack of the Clones',
      3: '3 - Revenge of the Sith',
      4: '4 - A New Hope',
      5: '5 - The Empire Strikes Back',
      6: '6 - Return of the Jedi',
    }),
    [],
  );

  const getFilm = useCallback(
    (url) => {
      const index = Number(url.charAt(url.length - 2)) - 1;
      return films[index];
    },
    [films],
  );

  useEffect(() => {
    getData().then((data) => {
      data.results.forEach((planet) => {
        // eslint-disable-next-line no-param-reassign
        delete planet.residents;
      });
      setPlanets(
        data.results.map((planet) => ({
          ...planet,
          id: v4(),
          films: planet.films.map((filmUrl) => getFilm(filmUrl)),
          created: format(new Date(planet.created), datePattern),
          edited: format(new Date(planet.edited), datePattern),
        })),
      );
      setHeaders(Object.keys(data.results[0]));
    });
  }, [setPlanets, getFilm]);

  return [
    [planets, setPlanets],
    [headers, setHeaders],
    [films, getFilm],
  ];
};

export default usePlanets;
