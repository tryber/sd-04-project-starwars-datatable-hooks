import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TableBody from './components/TableBody';
import TableHead from './components/TableHead';
import SWProvider from './context/Provider';
// To commit
function App() {
  return (
    <div>
      <SWProvider>
        <table className="table">
          <TableHead />
          <TableBody />
        </table>
      </SWProvider>
    </div>
  );
}

export default App;
