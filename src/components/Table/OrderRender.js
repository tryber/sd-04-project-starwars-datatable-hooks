import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StarWarsContext } from '../../context/StarWarsContext';
import '../css/tableBody.css';

const renderReturn = (keys) => (
  <tbody className="table_body">
    {keys.map((line) => (
      <tr key={`${line[0]} pai`}>
        {line.map((info, count) => {
          if (count === 0)
            return (
              <td key={`${info} filho`} data-testid="planet-name">
                {line[count]}
              </td>
            );
          return <td key={`${info} filho`}>{line[count]}</td>;
        })}
      </tr>
    ))}
  </tbody>
);

const numberOrder = (keys, sort) => {
  let keysOrded = keys;
  if (sort === 'ASC') {
    keysOrded = keys.sort((planetA, planetB) => {
      return parseFloat(planetA[2]) - parseFloat(planetB[2]);
    });
  } else {
    keysOrded = keys.sort((planetA, planetB) => {
      return parseFloat(planetA[2]) < parseFloat(planetB[2]) ? 1 : -1;
    });
  }
  return keysOrded;
};

const stringOrder = (keys, sort) => {
  let keysOrded = keys;
  if (sort === 'ASC') {
    keysOrded = keys.sort((planetA, planetB) => {
      return planetA[0] < planetB[0] ? -1 : 1;
    });
  } else {
    keysOrded = keys.sort((planetA, planetB) => {
      return planetA[0] > planetB[0] ? -1 : 1;
    });
  }
  return keysOrded;
};

const putInOrder = (keys, column, sort) => {
  let newKeys = keys;
  if (column === 'name') newKeys = stringOrder(keys, sort);
  else if (column === 'orbital_period') newKeys = numberOrder(keys, sort);
  return renderReturn(newKeys);
};

const Order = ({ keys }) => {
  const { filters } = useContext(StarWarsContext);
  const {
    order: { column, sort },
  } = filters;

  return column === 'name' ? putInOrder(keys, column, sort) : putInOrder(keys, column, sort);
};

Order.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Order;
