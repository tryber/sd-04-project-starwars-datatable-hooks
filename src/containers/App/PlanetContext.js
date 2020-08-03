import React, { useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  planetsFetching: true,
  data: [],
  planetsFetchErrored: { status: false, msg: '' },
};

const PlanetsContext = React.createContext(initialState);

export const PlanetProvider = ({ children }) => {
  const [planets, setPlanets] = useState(initialState);

  const setPlanetsState = (payload) => {
    setPlanets((prevState) => ({ ...prevState, ...payload }));
  };

  const fetchPlanets = () => {
    fetch('https://swapi.dev/api/planets/')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((data) => {
        const result = data.results.map((planet) => {
          const cleanPlanet = planet;
          delete cleanPlanet.residents;
          return cleanPlanet;
        });

        setPlanetsState({ data: result });
      })
      .then(() => setPlanetsState({ planetsFetching: false }))
      .catch((error) => setPlanetsState({ planetsFetchErrored: { status: true, msg: error } }));
  };

  const context = { planets, fetchPlanets };

  return <PlanetsContext.Provider value={context}>{children}</PlanetsContext.Provider>;
};

PlanetsContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsContext;
