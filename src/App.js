import React from 'react';
import { PlanetProvider } from './containers/App/PlanetContext';
import { FiltersProvider } from './containers/Filters/FiltersContext';
import Table from './components/Table';
import Filters from './containers/Filters';

const App = () => (
  <PlanetProvider>
    <FiltersProvider>
      <Filters />
      <Table />
    </FiltersProvider>
  </PlanetProvider>
);

export default App;
