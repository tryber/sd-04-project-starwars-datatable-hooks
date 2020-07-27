import React, { useEffect, useContext, useState } from 'react';
import './App.css';
import StartWarsContext from './context/StarWarsContext';
import Table from './components/Table';

function App() {
  const initialState = [];
  const [planets, setPlanets] = useState(initialState);
  const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api';

  useEffect(() => {
    fetch(`${PLANETS_API}/planets`).then((response) =>
      response.json().then((json) => {
        setPlanets(json.results);
      }),
    );
  }, []);

  return (
    <StartWarsContext.Provider value={planets}>
      <div className="App">
        <header className="App-header">
          <h2>Star Wars Database</h2>
        </header>
        {planets === initialState ? <h2>Loading...</h2> : <Table />}
      </div>
    </StartWarsContext.Provider>
  );
}

export default App;
