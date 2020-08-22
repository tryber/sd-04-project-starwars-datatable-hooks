import { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

useEffect(() => {
  fetchStarWars()
  .then((getData) => {
    setIsFetching(false);
    setData(getData.results);
  });
}, []);