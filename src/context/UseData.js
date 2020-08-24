import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from './StarWarsContext';
import getAPI from '../service/getAPI';
import Table from '../components/Table';

const UseData = () => {
  const { loading, setLoading } = useContext(
    StarWarsContext,
  );

  useEffect(() => {
    setLoading(true);
    getAPI().then((json) => {
      console.log(json.results);
    });
    setLoading(false);
  }, [loading, setLoading]);
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <h1>StarWars Datatable</h1>
      <Table />
    </div>
  );
};

export default UseData;
