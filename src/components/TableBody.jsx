import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import starWarsFilter from './functions/StarWarsFilters';

function TableBody() {
  const { data, getFilterName } = useContext(StarWarsContext);
  const filterData = starWarsFilter(data, getFilterName());
  return (
    <tbody>
      {filterData.map((planet) => (
        <tr key={planet.name}>
          {Object.keys(planet).map((information) => (
            <td key={information}>{planet[information]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
