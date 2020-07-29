import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Home () {  
  const { data } = useContext(StarWarsContext);
  console.log('Data', data)
  return (
    <div>
      {data.map(plat => <p>{plat.name}</p>)}
    </div>
  )
}

export default Home;
