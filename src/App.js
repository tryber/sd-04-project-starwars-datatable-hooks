import React, { useEffect, useContext } from 'react';
import './App.css';
import Table from './components/Table';
import Input from './components/Input';
import Filters from './components/Filters';
import OrderFilter from './components/orderFilter';
import { StarWarsContext } from './context/StarWarsContext';
import getPlanets from './services/index';

const App = () => {
  const { loading, setLoading, data, setData, filterByNumericValues } = useContext(StarWarsContext);

  useEffect(() => {
    setLoading(true);
    getPlanets().then((json) => {
      setData(json.results);
    });
    setLoading(false);
  }, [loading, setData]);
  if (loading)
    return <p onClick={() => console.log(data)}>{console.log(data)}Loading</p>;
  return (
    <div>
      <Input />
        <OrderFilter />
        {(filterByNumericValues.length > 0) ? <Filters /> : <p>Nenhum filtro aplicado</p>}
        <p>StarWars Datatable with Filters</p>
        <Table />
    </div>
  );
};

export default App;
