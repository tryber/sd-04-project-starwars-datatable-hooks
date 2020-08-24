import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import getAPI from '../service/getAPI';

const useData = () => {
  const { loading, setLoading } = useContext(
    StarWarsContext,
  );

  useEffect(() => {
    setLoading(true);
    getAPI().then((json) => {
      console.log(json.results);
      setLoading(false);
    },
    (error) => {
      console.log(error);
      setLoading(false);
    },
  );
  }, []);
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <h1>StarWars Datatable</h1>
      {/* <Table /> */}
    </div>
  );
};

export default useData;
