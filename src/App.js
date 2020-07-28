import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div>
        StarWars Datatable com Context API e Hooks
        <Table />
      </div>
    </Provider>
  );
}

export default App;
