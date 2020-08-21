import React, { useContext, useEffect } from 'react';
import apiRequest from '../service';
import { StarWarsContext } from '../context/store';
import { renderHeader, renderTable, applyNameFilter } from '../helper';

const Table = () => {
  const { data: [data, setData] } = useContext(StarWarsContext);
  const { loading: [loading, setLoading] } = useContext(StarWarsContext);
  const { filterByName: [filterByName] } = useContext(StarWarsContext);

  useEffect(() => {
    apiRequest('planets').then((response) => { setData(response); setLoading(false); });
  });

  if (loading) { return <h1>loading</h1>; }
  let filteredResults;
  if (filterByName !== '') {
    filteredResults = applyNameFilter(filterByName, data);
  } else {
    filteredResults = data;
  }

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>{renderHeader(filteredResults[0])}</tr>
        </thead>
        <tbody>{renderTable(filteredResults)}</tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
