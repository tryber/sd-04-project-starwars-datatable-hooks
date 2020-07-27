import React from 'react';
import PropTypes from 'prop-types';
import usePlanets from '../hooks/usePlanets';
import useFilters from '../hooks/useFilters';

const Content = ({ planets, filterByName, filterByNumericValues, sort }) => (
  <tbody>
    {sort(filterByNumericValues(filterByName(planets))).map((planet) => (
      <tr key={planet.orbital_period}>
        {Object.entries(planet).map(([key, value]) => {
          console.log('cc cuzao')
          return key === 'name' ? (
            <td key={value} data-testid="planet-name">
              {value}
            </td>
          ) : (
            <td key={value}>{value}</td>
          );
        })}
      </tr>
    ))}
  </tbody>
);

export default function Table() {
  const [[planets], [headers]] = usePlanets();
  const [, , { sortPlanets, filterByNumericValues, filterByName }] = useFilters();

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          {headers.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <Content
        planets={planets}
        filterByName={filterByName}
        filterByNumericValues={filterByNumericValues}
        sort={sortPlanets}
      />
    </table>
  );
}

Content.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterByName: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
};
