import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TableBody from './components/TableBody';
import TableHead from './components/TableHead';
import SWProvider from './context/Provider';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
// To commit
function App() {
  return (
    <div>
      <SWProvider>
        <SearchBar />
        <Filters />
        <table className="table">
          <TableHead />
          <TableBody />
        </table>
      </SWProvider>
    </div>
  );
}

export default App;
