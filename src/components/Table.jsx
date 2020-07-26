import React from 'react';
import PropTypes from 'prop-types';
import usePlanets from '../hooks/usePlanets';
import useFilters from '../hooks/useFilters';

const filterByNumericValues = (data, filterNumber) =>
  filterNumber.reduce((filteredPlanetsArray, filterNumericValue) => {
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
  }, data);

const Content = ({ data, filterName, filterNumber }) => (
  <tbody>
    {filterByNumericValues(data, filterNumber)
      .filter((planet) => planet.name.toLowerCase().includes(filterName.toLowerCase()))
      .map((planet) => (
        <tr key={planet.orbital_period}>
          {Object.values(planet).map((value) => (
            <td key={value}>{value}</td>
          ))}
        </tr>
      ))}
  </tbody>
);

export default function Table() {
  const [[planets], [headers]] = usePlanets();
  const [{ filterName, filtersNumber }] = useFilters();
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          {headers.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <Content data={planets} filterName={filterName} filterNumber={filtersNumber} />
    </table>
  );
}

Content.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterName: PropTypes.string.isRequired,
  filterNumber: PropTypes.arrayOf(PropTypes.object).isRequired,
};
