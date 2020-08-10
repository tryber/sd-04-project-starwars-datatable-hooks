import AppContext from '../context/AppContext';
import React, { useContext, useEffect } from 'react';
import getSwapi from '../services/getSwapi';

const filterTableByName = (search, set, data, planets) => {
  const filteredPlanets = planets.filter(({ name }) => name.includes(search));

  set({ ...data, filteredPlanets, filterByName: { name: search } });
};

const Header = () => {
  useEffect((planetsData) => {
    getPlanetsData();
  }, []);

  async function getPlanetsData() {
    const planets = await getSwapi();
    setData({
      ...data,
      planetsData: planets.results,
      filteredPlanets: planets.results,
      isFetching: false,
    });
  }

  const { data, setData, isFetching } = useContext(AppContext);
  if (isFetching) return <p>Loading...</p>;

  const { planetsData } = data;
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={(e) => filterTableByName(e.target.value, setData, data, planetsData)}
      />
    </div>
  );
};

export default Header;
