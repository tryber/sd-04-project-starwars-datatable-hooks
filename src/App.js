import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import Header from './components/Header';

const App = () => (
  <StarWarsProvider>
    <div>
      <Header />
      <section>
        <Table />
      </section>
    </div>
  </StarWarsProvider>
);

export default App;
