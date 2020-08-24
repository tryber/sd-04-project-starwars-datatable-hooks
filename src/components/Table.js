import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import filterFunc from './helpers/filterFunc';
import sortFunc from './helpers/sortFunc';

const Table = () => {
  const { data, filters } = useContext(StarWarsContext);
  const keys = data.length >= 1 ? Object.keys(data[0]) : [];
  const tableHeader = keys.filter((key) => key !== 'residents');

  const dataPlanets = filterFunc(data, filters.filterByName.name, filters.filterByNumericValues);
  const orderDataPlanets = sortFunc(dataPlanets, filters.order.column, filters.order.sort);

  // console.logs debugging
  // console.log('filters:', filters);
  // console.log('dataPlanets:', dataPlanets)
  // console.log('orderDataPlanets:', orderDataPlanets)

  return (
    <table>
      <thead>
        <tr>
          {tableHeader.map((columns) => (
            <th key={columns}>{columns}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orderDataPlanets.map((planet) => (
          <tr key={planet.name}>
            {tableHeader.map((columns) => (
              <td key={planet[columns]} data-testid={columns === 'name' ? 'planet-name' : null}>
                {planet[columns]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
