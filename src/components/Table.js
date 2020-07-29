import React, { useContext } from 'react';
import FilterForms from './FilterForms';
import { StarWarsContext } from '../context/StarWarsContext';
import useData from '../context/useData';

// class Table extends Component {
//   componentDidMount() {
//     const { fetchPlanets: fetch } = this.props;
//     fetch();
//   }

//   test() {
//     const { filteredPlanets } = this.props;
//     return filteredPlanets;
//   }

//   render() {
//     const { planetsData, filteredPlanets, isFetching } = this.props;
//     if (isFetching) return <p>Loading...</p>;
//     const headerTitles = planetsData ? Object.keys(planetsData[0]) : [];
//     return <RenderTable tableHeaderTitles={headerTitles} filteredPlanets={filteredPlanets} />;
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   fetchPlanets: () => dispatch(fetchPlanets()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Table);

// Table.propTypes = {
//   planetsData: PropTypes.arrayOf(PropTypes.object).isRequired,
//   fetchPlanets: PropTypes.func.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   filteredPlanets: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

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

export default Table;
