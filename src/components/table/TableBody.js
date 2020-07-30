import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from '../../context/StarWarsContext';
import orderFuncAsc from '../filters/OrderFuncAsc';
import orderFuncDesc from '../filters/OrderFuncDesc';

function TableBody() {
  const {
    data,
    filterByName: { name },
    filterByNumericValues,
    order: { column, sort },
  } = useContext(StarWarsContext);

  data =
    sort === 'ASC'
      ? orderFuncAsc(data, name, filterByNumericValues, column, sort)
      : orderFuncDesc(data, name, filterByNumericValues, column, sort);

  return (
    <tbody>
      {data.map((planet) => (
        <tr key={planet.name}>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>
            {planet.films.map((film) => (
              <span key={film}>{film}</span>
            ))}
          </td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;

// TableBody.defaultProps = {
//   columnSort: 'Name',
//   sort: 'ASC',
// };

// TableBody.propTypes = {
//   planets: PropTypes.arrayOf(
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
//       film: PropTypes.string,
//       created: PropTypes.string,
//       edited: PropTypes.string,
//       url: PropTypes.string,
//     }),
//   ).isRequired,
//   name: PropTypes.string.isRequired,
//   numericValues: PropTypes.arrayOf(
//     PropTypes.shape({
//       column: PropTypes.string,
//       comparison: PropTypes.string,
//       value: PropTypes.string,
//       columnSort: PropTypes.string,
//       sort: PropTypes.string,
//     }),
//   ).isRequired,
//   columnSort: PropTypes.string.isRequired,
//   sort: PropTypes.string.isRequired,
// };
