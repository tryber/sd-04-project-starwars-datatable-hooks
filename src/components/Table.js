import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const renderTHead = (headers) => (
  <thead>
    <tr>
      {headers.map((header) => (
        <th key={header}>{header}</th>
      ))}
    </tr>
  </thead>
);

const renderTBody = (headers, data) => (
  <tbody>
    {data.map((planet) => (
      <tr key={planet.name}>
        {headers.map((desc) => (
          <td key={desc}>{planet[desc]}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

const renderTable = (headers, data) => (
  <table>
    {renderTHead(headers)}
    {renderTBody(headers, data)}
  </table>
);

// const comparacao = (planets, columnFilter) => {
//   let aux = [...planets];
//   columnFilter.forEach(({ column, comparison, value }) => {
//     aux = aux.filter((planet) => {
//       if (comparison === 'maior que') return Number(planet[column]) > Number(value);
//       if (comparison === 'igual a') return Number(planet[column]) === Number(value);
//       if (comparison === 'menor que') return Number(planet[column]) < Number(value);
//       return false;
//     });
//   });
//   return aux;
// };

const Table = () => {
  // componentDidMount() {
  //   const { starWarsAPI } = this.props;
  //   starWarsAPI();
  // }
  const { planets } = useContext(StarWarsContext);

  // const { data, isFetching, searchTerm, columnFilter } = this.props;
  let headers = '';
  // let filtereds = [...planets];
  if (!planets.length) {
    return <div>Loading...</div>;
  }
  headers = Object.keys(planets[0]).filter((key) => key !== 'residents');
  // if (searchTerm) {
  //   filtereds = data.filter((planet) => planet.name.includes(searchTerm));
  //   return <div>{renderTable(headers, filtereds)}</div>;
  // }
  // if (columnFilter.length !== 0) {
  //   filtereds = comparacao(data, columnFilter);
  //   return <div>{renderTable(headers, filtereds)}</div>;
  // }
  return <div>{renderTable(headers, planets)}</div>;
};

export default Table;
