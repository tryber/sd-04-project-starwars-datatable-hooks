import { planets, setPlanets } from './Provider';
import { useContext, useEffect } from 'react';
import { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FetchPlanets from '../services/apiPlanets';

export default function usePlanets() {
  const { planets, getPlanets } = useContext(StarWarsContext);

  useEffect(() => {
    FetchPlanets().then(planets => setPlanets(planets));
  }, []);

  return planets;
}
