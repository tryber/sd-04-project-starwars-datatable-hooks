import React from 'react';
import usePlanets from '../hooks/usePlanets';
import useFilters from '../hooks/useFilters';

const Content = ({ data, filterName }) => {
  return (
    <tbody>
      {data
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
};

export default function Table(props) {
  const [[planets], [headers]] = usePlanets();
  const [{ filterName }] = useFilters();
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          {headers.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <Content data={planets} filterName={filterName} />
    </table>
  );
}
