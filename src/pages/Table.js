import React, { useContext, useEffect } from 'react';
import apiRequest from '../service';
import { StarWarsContext } from '../context/store';
import {
  renderHeader, renderTable, applyNameFilter, applyNumFilter, sortTableData,
} from '../helper';

const Table = () => {
  const {
    data: [data, setData],
    filterByName: [filterByName],
    filterByNumericValues: [filterByNumericValues],
    loading: [loading, setLoading],
    order: {
      columnSort: [columnSort],
      sort: [sort],
    },
  } = useContext(StarWarsContext);

  useEffect(() => {
    apiRequest('planets').then((response) => { setData(response); setLoading(false); });
  });

  if (data.length !== 0) {
    const nameOrder = data.sort((a, b) => a.name.localeCompare(b.name));
    const filteredResults = applyNumFilter(
      filterByNumericValues, applyNameFilter(
        filterByName, sortTableData(nameOrder, columnSort, sort),
      ),
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
