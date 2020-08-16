import React, { useContext } from 'react';
import { StarWarsContext } from './context/StarWarsContext';
import Table from './components/Table';
import getPlanetsAPI from './services';

const setDatas = (data, setData, setBackupData) => {
  setData(data);
  setBackupData(data);
};

const loadPage = (setData, setBackupData) => {
  getPlanetsAPI().then((data) => setDatas(data.results, setData, setBackupData));
  return <div>Loading...</div>;
};

const App = () => {
  const { data, setData, setBackupData } = useContext(StarWarsContext);

  return (data.length === 0 ?
    loadPage(setData, setBackupData) :
    <Table />
  );
};

export default App;
