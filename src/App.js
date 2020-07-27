import React from 'react';
import StarWarsContextStore from './context/StarWarsContextStore';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <StarWarsContextStore>
        <Header />
        <Table />
      </StarWarsContextStore>
    </div>
  );
}

export default App;
