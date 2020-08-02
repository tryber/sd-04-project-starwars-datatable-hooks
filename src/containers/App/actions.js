export const PLANETS_FETCH = 'PLANETS_FETCH';
export const PLANETS_FETCH_SUCCESS = 'PLANETS_FETCH_SUCCESS';
export const PLANETS_FETCH_ERROR = 'PLANETS_FETCH_ERROR';

const planetsFetch = (status) => ({
  type: PLANETS_FETCH,
  status,
});

const planetsFetchSuccess = (planets) => ({
  type: PLANETS_FETCH_SUCCESS,
  planets,
});

const planetsFetchErrored = (status) => ({
  type: PLANETS_FETCH_ERROR,
  status,
});

export const fetchPlanets = () => (dispatch) => {
  fetch('https://swapi.dev/api/planets/')
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);

      return response.json();
    })
    .then((data) => dispatch(planetsFetchSuccess(data)))
    .then(() => dispatch(planetsFetch(false)))
    .catch((error) => dispatch(planetsFetchErrored({ status: true, error })));
};
