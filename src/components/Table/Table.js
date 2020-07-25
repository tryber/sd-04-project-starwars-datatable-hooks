import React, { useContext } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Table.css';
import { StarWarsContext } from '../../context/StarWarsContext';

const thead = [
  'name',
  'climate',
  'created',
  'diameter',
  'edited',
  'films',
  'gravity',
  'orbital_period',
  'population',
  'rotation_period',
  'surface_water',
  'terrain',
  'url',
];

const filterPlanetsByName = (planets, input) => {
  if (input === '') return planets;
  return planets.filter(({ name }) => name.toLowerCase().includes(input.toLowerCase()));
};

const filterPlanetsByNumericValues = (planets, filters) => {
  if (filters.length === 0) return planets;
  return filters.reduce((filteredPlanetsArray, filterNumericValue) => {
    const { column, comparison, value } = filterNumericValue;
    return filteredPlanetsArray.filter((planet) => {
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
    });
  }, planets);
};

const sortPlanets = (planets, column, sort) => {
  if (planets.length === 0) return planets;
  // const { orderColumn, orderSort } = this.props;
  const planetKey = column.toLowerCase();

  if (isNaN(planets[0][planetKey])) {
    planets.sort((a, b) => (a[planetKey] > b[planetKey] ? 1 : -1));
  } else {
    planets.sort((a, b) => a[planetKey] - b[planetKey]);
  }
  if (sort === 'DESC') planets.reverse();
  return planets;
};

const Table = () => {
  const {
    SWAPI: { loading, data },
    filters: {
      filterByName: { name },
      filterByNumericValues,
      order: { column, sort },
    },
  } = useContext(StarWarsContext);

  const renderTableHead = () => (
    <thead>
      <tr>
        {thead.map((th) => (
          <th key={th}>{th}</th>
        ))}
      </tr>
    </thead>
  );

  const renderTableBody = () => {

    const filteredByNamePlanets = filterPlanetsByName(data, name);
    const filteredPlanets = filterPlanetsByNumericValues(
      filteredByNamePlanets,
      filterByNumericValues,
    );
    const filteredSortedPlanets = sortPlanets(filteredPlanets, column, sort);
    return (
      <tbody>
        {filteredPlanets.map((planet) => (
          <tr key={planet.name}>
            {thead.map((th) => {
              if (th === 'name')
                return (
                  <td data-testid="planet-name" key={`${planet.name} ${th}`}>
                    {planet[th]}
                  </td>
                );
              return <td key={`${planet.name} ${th}`}>{planet[th]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    );
  };

  if (loading || !data) return <div>loading...</div>;

  return (
    <div className="table-container">
      <table>
        {renderTableHead()}
        {renderTableBody()}
      </table>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   data: state.SWAPI.data,
//   loading: state.SWAPI.loading,
//   inputName: state.filters.filterByName.name,
//   filterNumericValues: state.filters.filterByNumericValues,
//   orderColumn: state.filters.order.column,
//   orderSort: state.filters.order.sort,
// });

export default Table;

// export default connect(mapStateToProps)(Table);

// Table.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   inputName: PropTypes.string.isRequired,
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       rotation_period: PropTypes.string,
//       orbital_period: PropTypes.string,
//       diameter: PropTypes.string,
//       climate: PropTypes.string,
//       gravity: PropTypes.string,
//       terrain: PropTypes.string,
//       surface_water: PropTypes.string,
//       population: PropTypes.string,
//       films: PropTypes.arrayOf(PropTypes.string),
//       created: PropTypes.string,
//     }),
//   ).isRequired,
//   filterNumericValues: PropTypes.arrayOf(
//     PropTypes.shape({
//       column: PropTypes.string,
//       comparison: PropTypes.string,
//       value: PropTypes.any,
//     }),
//   ).isRequired,
//   orderColumn: PropTypes.string.isRequired,
//   orderSort: PropTypes.string.isRequired,
// };
