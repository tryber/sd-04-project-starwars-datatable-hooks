import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StarWarsContext } from '../../context/StarWarsContext';
import '../css/tableBody.css';

const renderTable = (keys) => {
  return (
    <tbody className="table_body">
    {keys.map((line, index) => (
      <tr key={`${line[index]} pai`}>
        {line.map((info, count) => (
          <td key={`${info} filho`}>{line[count]}</td>
        ))}
      </tr>
    ))}
  </tbody>
  );
};

const aplyName = (keys, name) => {
  const newData = keys.filter((planet) => {
    const namePlanetLower = [];
    namePlanetLower.push(planet[0].toLowerCase());
    return namePlanetLower[0].includes(name.toLowerCase());
  });
  return renderTable(newData);
};

const TableBody = ({ keys }) => {
  const { filters } = useContext(StarWarsContext);
  const { filterByName: { name } } = filters;

  if (name) {
    return aplyName(keys, name);
  }
  return (
    renderTable(keys)
  );
};

TableBody.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default TableBody;
