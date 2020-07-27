import React from 'react';
import './App.css';
import StarWarsContext from './context/StarWarsContext';
// import Table from './components/Table';
import Header from './components/Header';

const App = () => (
  <StarWarsContext>
    <div>
      <Header />
      {/* <Table /> */}
    </div>
  </StarWarsContext>
);

export default App;
