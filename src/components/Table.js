import React, { useContext, useEffect } from 'react';
import { StarsWarsContext } from '../context/StarWarsContext';
import FilterByName from './FilterByName';
import Filters from './Filters';
import TableHead from './TableHead';
import RemoveFilter from './RemoveFilter';
import RadioSort from './RadioSort';

import './Table.css';

const Table = () => {
  const { data, filter, fetchAPI, orderAscDesc } = useContext(StarsWarsContext);

  useEffect(() => {
    fetchAPI();
  }, []);

  const filtered = filter(data);
  console.log(filtered);
  return (
    <div>
      <FilterByName />
      <Filters />
      <RemoveFilter />
      <RadioSort />
      <table>
        {data.length > 0 && <TableHead />}
        <tbody>
          {orderAscDesc(filtered).map((row) => (
            <tr key={row.name}>
              <td data-testid="planet-name" >{row.name}</td>
              <td>{row.rotation_period}</td>
              <td>{row.orbital_period}</td>
              <td>{row.diameter}</td>
              <td>{row.climate}</td>
              <td>{row.gravity}</td>
              <td>{row.terrain}</td>
              <td>{row.surface_water}</td>
              <td>{row.population}</td>
              <td>{row.films}</td>
              <td>{row.created}</td>
              <td>{row.edited}</td>
              <td>{row.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
