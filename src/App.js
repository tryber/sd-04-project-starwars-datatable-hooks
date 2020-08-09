import React, { useEffect, useContext } from 'react';
import AppContext from './context/AppContext';
import Table from './components/Table';
import AppProvider from './context/AppProvider';
import getSwapi from './services/getSwapi';

const App = () => {
 
  return (
    <AppProvider>
      <Table />
    </AppProvider>
  );
};

export default App;
