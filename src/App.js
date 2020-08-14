import React from "react";
import Provider from "./context/AppContext";
import Table from "./components/Table";
import TableBody from "./components/TableBody";

function App() {
  return (
    <Provider>
      <h1>Star Wars com hooks que é melhor que Redux</h1>
      <Table />
      <TableBody />
    </Provider>
  );
}

export default App;
