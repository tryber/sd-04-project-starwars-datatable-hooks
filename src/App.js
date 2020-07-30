import React from 'react';
import Table from './components/Table';
import Filters from './components/Filters';
// import { StarWarsContext } from './context/StarWarsContext';

function App() {
  // Obtém os dados via useContext > get > destructuring 

  // const { getFilters: [ filters ], getData: [ data ] } = useContext(StarWarsContext);

  return (
    <div className="App">
      <header className="App-header">
        {/* <Filters filtersNV={filters.filterByNumericValues} filters={filters} /> */}
        <Filters />
        {/* <Table data={data.data} /> */}
        <Table />
      </header>
    </div>
  );
}

export default App;
