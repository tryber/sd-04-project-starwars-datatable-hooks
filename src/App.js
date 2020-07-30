import React from 'react';
import Table from './components/Table';
import Filters from './components/Filters';

function App() {
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
