import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TableBody from './components/TableBody';
import TableHead from './components/TableHead';
import SWProvider from './context/Provider';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import FiltersInUse from './components/FiltersInUse';
// To commit
function App() {
  return (
    <div>
      <SWProvider>
        <SearchBar />
        <Filters />
        <FiltersInUse />
        <table className="table">
          <TableHead />
          <TableBody />
        </table>
      </SWProvider>
    </div>
  );
}

export default App;
