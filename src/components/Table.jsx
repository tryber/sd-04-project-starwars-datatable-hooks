import React from 'react';
import PropTypes from 'prop-types';

import usePlanets from '../hooks/usePlanets';
import useFilters from '../hooks/useFilters';
import { capitalize, removeUnderline } from '../utils/format';

const Content = ({ planets, filterByName, filterByNumericValues, sort }) => (
  <tbody>
    {sort(filterByNumericValues(filterByName(planets))).map((planet) => (
      <tr key={planet.id}>
        {Object.entries(planet)
          .filter(([key]) => key !== 'id' && key !== 'url')
          .map(([key, value]) => {
            switch (key) {
              case 'name':
                return (
                  <td key={value} data-testid="planet-name" className="text-center">
                    {value}
                  </td>
                );
              case 'films':
                return (
                  <td className="text-center" key={value}>
                    {value.map((film) => (
                      <p key={film + Math.round(Math.random() * 100)} className="mb-0">
                        {film}
                      </p>
                    ))}
                  </td>
                );
              default:
                return (
                  <td className="text-center" key={value}>
                    {value}
                  </td>
                );
            }
          })}
      </tr>
    ))}
  </tbody>
);

export default function Table() {
  const [planets, headers] = usePlanets();
  const [, , { sortPlanets, filterByNumericValues, filterByName }] = useFilters();
  return (
    <div className="row">
      <div className="table-responsive">
        <table className="table table-hover table-dark">
          <thead className="bg-warning">
            <tr className="text-center text-dark">
              {headers
                .get()
                .filter((title) => title !== 'url')
                .map((title) => {
                  const formattedTitle = capitalize(removeUnderline(title));
                  return <th key={title}>{formattedTitle}</th>;
                })}
            </tr>
          </thead>
          <Content
            planets={planets.get()}
            filterByName={filterByName}
            filterByNumericValues={filterByNumericValues}
            sort={sortPlanets}
          />
        </table>
      </div>
    </div>
  );
}

Content.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterByName: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
};
