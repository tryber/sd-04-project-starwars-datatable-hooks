import React, { useEffect, useContext } from 'react';
import RenderTable from '../components/RenderTable';
import { StarWarsContext } from '../context';
import getPlanets from '../services/getPlanets';

export default function Table() {
  const { data, setData } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanets().then((planetsData) =>
      setData({
        ...data,
        planetsData: planetsData.results,
        filteredPlanets: planetsData.results,
        isFetching: false,
      }),
    );
  }, []);
  const { isFetching, planetsData, filteredPlanets } = data;

  if (isFetching) return <p>Loading...</p>;
  const headerTitles = planetsData ? Object.keys(planetsData[0]) : [];

  return <RenderTable planets={filteredPlanets} tableHeaderTitles={headerTitles} />;
}
