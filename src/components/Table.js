import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import FilterForms from './FilterForms';
import OrderFilter from './OrderFilter';
import { StarWarsContext } from '../context/StarWarsContext';
import useData from '../context/useData';

const comparisson = (planet, { column, comparison, value }) => {
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    default:
      return false;
  }
};

const orderPlanets = (column, sort, planets) => {
  const newPlanets = [...planets];
  if (!Number(newPlanets[0][column])) {
    newPlanets.sort(function (a, b) {
      const x = a[column].toLowerCase();
      const y = b[column].toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  } else {
    newPlanets.sort(function (a, b) {
      return a[column] - b[column];
    });
  }

  if (sort === 'ASC') return newPlanets;
  if (sort === 'DESC') return newPlanets.reverse();
  return newPlanets;
};

const Table = () => {
  const { filterByNumericValues, filterByName, order, handleInput } = useContext(StarWarsContext);
  const { data } = useData();
  let planets = [...data];
  if (planets.length >= 1) {
    const newColumn = order.column.toLowerCase();
    planets = orderPlanets(newColumn, order.sort, planets);
  }
  const keys = data.length >= 1 ? Object.keys(data[0]) : [];
  const tableHeader = keys.filter((key) => key !== 'residents');
  if (filterByNumericValues.length >= 1) {
    filterByNumericValues.forEach((filter) => {
      planets = planets.filter((planet) => comparisson(planet, filter));
    });
  }
  const inputText = filterByName.name;
  if (inputText !== '') planets = planets.filter((planet) => planet.name.includes(inputText));

  return (
    <div>
      <input data-testid="name-filter" type="text" onChange={(e) => handleInput(e.target.value)} />
      <FilterForms />
      <OrderFilter keys={tableHeader} />
      <table>
        <thead>
          <tr>
            {tableHeader.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <tr key={planet.name}>
              {tableHeader.map((column) => (
                <td data-testid={column === 'name' ? 'planet-name' : null} key={planet[column]}>
                  {planet[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   inputText: state.filters.filterByName.name,
//   filterByNumericValues: state.filters.filterByNumericValues,
//   data: state.apiReducer.data,
//   error: state.apiReducer.error,
//   col: state.filters.order.column,
//   sort: state.filters.order.sort,
// });

// const mapDispatchToProps = (dispatch) => ({
//   handleInput: (text) => dispatch(handleChange(text)),
// });

// Table.propTypes = {
// data: PropTypes.arrayOf(PropTypes.object).isRequired,
// handleInput: PropTypes.func.isRequired,
// inputText: PropTypes.string.isRequired,
// filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
// col: PropTypes.string.isRequired,
// sort: PropTypes.string.isRequired,
// };

export default Table;
