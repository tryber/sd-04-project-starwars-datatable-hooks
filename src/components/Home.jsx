import React, { useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import apiPlanets from '../services/index'

function Home () {

  useEffect(() => {
    loadData().then((data) => console.log(data));
  }, [] )
  
  const loadData = async () => {
    const data = await apiPlanets();
    return data;
  }

  return (
    <div>
    </div>
  )
}

export default Home;
