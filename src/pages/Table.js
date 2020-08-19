import React, { useContext, useEffect } from 'react';
import apiRequest from '../service';
import { StarWarsContext } from '../context/store';
import { renderHeader, renderTable } from '../helper';

const Table = () => {
  const { data: [data, setData] } = useContext(StarWarsContext);
  const { loading: [loading, setLoading] } = useContext(StarWarsContext);

  useEffect(() => {
    apiRequest('planets').then((response) => { setData(response); setLoading(false); });
  });

  if (loading) return <h1>loading</h1>;
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>{renderHeader(data[0])}</tr>
        </thead>
        <tbody>{renderTable(data)}</tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
