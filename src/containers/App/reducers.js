import { PLANETS_FETCH, PLANETS_FETCH_ERROR, PLANETS_FETCH_SUCCESS } from './actions';

const initialState = {
  planetsFetching: true,
  data: [],
  hasErrored: { status: false, msg: '' },
};

const planets = (state = initialState, action) => {
  switch (action.type) {
    case PLANETS_FETCH:
      return { ...state, planetsFetching: action.status };

    case PLANETS_FETCH_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.planets.map((planet) => {
          const cleanPlanet = planet;
          delete cleanPlanet.residents;
          return cleanPlanet;
        })],
      };

    case PLANETS_FETCH_ERROR:
      return {
        ...state,
        hasErrored: { ...state.hasErrored, ...action.planets },
      };

    default:
      return state;
  }
};

export default planets;
