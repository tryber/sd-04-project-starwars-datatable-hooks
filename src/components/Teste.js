import React, { useContext, useEffect } from 'react';
import Table from './Table';
import Input from './Input';
import Filters from './Filters';
import OrderFilter from './orderFilter';
import { StarWarsContext } from '../context/StarWarsContext';
import getPlanets from '../services/index';

const Teste = () => {
  const { loading, setLoading, setData, filterByNumericValues } = useContext(
    StarWarsContext,
  );

  useEffect(() => {
    setLoading(true);
    getPlanets().then((json) => {
      setData(json.results);
    });
    setLoading(false);
  }, [loading, setData, setLoading]);
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <Input />
      <OrderFilter />
      {filterByNumericValues.length > 0 ? (
        <Filters />
      ) : (
        <p>Nenhum filtro aplicado</p>
      )}
      <p>StarWars Datatable with Filters</p>
      <Table />
    </div>
  );
};

export default Teste;
