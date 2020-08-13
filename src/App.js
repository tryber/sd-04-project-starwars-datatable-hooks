import React from "react";
import Provider from "./context/AppContext";
import Table from './components/Table';
import TableBody from './components/TableBody';

function App() {
  return (
    <Provider>
      <Table />
      <TableBody />
    </Provider>
  );
}

export default App;
