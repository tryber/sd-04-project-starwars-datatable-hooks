import React, { useContext, useEffect } from 'react';
import apiRequest from '../service';
import { StarWarsContext } from '../context/store';
import {
  renderHeader, renderTable, applyNameFilter, applyNumFilter,
} from '../helper';

const Table = () => {
  const { data: [data, setData] } = useContext(StarWarsContext);
  const { loading: [loading, setLoading] } = useContext(StarWarsContext);
  const { filterByName: [filterByName] } = useContext(StarWarsContext);
  const {
    filterByNumericValues: [filterByNumericValues],
  } = useContext(StarWarsContext);

  useEffect(() => {
    apiRequest('planets').then((response) => { setData(response); setLoading(false); });
  });

  if (data.length !== 0) {
    const filteredResults = applyNumFilter(
      filterByNumericValues, applyNameFilter(filterByName, data),
    );
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
  }
  if (loading) { return <h1>loading</h1>; }
  return <div>Nothing to see here, move along</div>;
};

export default Table;
