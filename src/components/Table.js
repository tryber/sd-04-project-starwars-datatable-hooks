/* import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import filterFunc from './helpers/filterFunc';
import sortFunc from './helpers/sortFunc'; */

import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import filterFunc from './helpers/filterFunc';

const Table = () => {
  const { data, filters } = useContext(StarWarsContext);
  const keys = data.length >= 1 ? Object.keys(data[0]) : [];
  const tableHeader = keys.filter((key) => key !== 'residents');
  const numericValues = '';
  const dataPlanets = filterFunc(data, filters.filterByName.name, numericValues);
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
        {dataPlanets.map((planet) => (
          <tr key={planet.name}>
            {tableHeader.map((columns) => (
              <td key={planet[columns]}>{planet[columns]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

/*
const { data } = this.props;
const keys = data.length >= 1 ? Object.keys(data[0]) : [];
const tableHeader = keys.filter((key) => key !== 'residents');

const getHeaders = (planets) => Object.keys(planets[0]).filter((header) => header !== 'residents');

class Table extends React.Component {
  render() {
    const { data, name, numericValues, column, sort } = this.props;
    const keys = data.length >= 1 ? Object.keys(data[0]) : [];
    const tableHeader = keys.filter((key) => key !== 'residents');
    const dataPlanets = filterFunc(data, name, numericValues);
    const orderDataPlanets = sortFunc(dataPlanets, column, sort);

    return (
      <div>
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
                  <td key={planet[columns]}>{planet[columns]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  numericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  column: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.planets.data,
  name: state.filters.filterByName.name,
  numericValues: state.filters.filterByNumericValues,
  column: state.filters.order.column,
  sort: state.filters.order.sort,
});

export default connect(mapStateToProps)(Table);
 */
