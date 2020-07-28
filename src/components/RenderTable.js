import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const filterData = (datatable, name, numericFilters) => {
  let filteredData = [];
  if (name === '') filteredData = datatable;
  if (name !== '') {
    filteredData = datatable.filter((planet) => planet.name.includes(name));
  }
  if (numericFilters.length > 0) {
    numericFilters.forEach((filter) => {
      if (filter.comparison === 'maior que') {
        filteredData = filteredData.filter(
          (planet) => planet[filter.column] > Number(filter.value),
        );
      }
      if (filter.comparison === 'menor que') {
        filteredData = filteredData.filter(
          (planet) => planet[filter.column] < Number(filter.value),
        );
      }
      if (filter.comparison === 'igual a') {
        filteredData = filteredData.filter(
          (planet) => planet[filter.column] === filter.value,
        );
      }
    });
  }
  return filteredData;
};

const numericKeys = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

function compareValues(key, order = 'ASC') {
  return function compare(a, b) {
    let val1 = a[key];
    let val2 = b[key];

    if (numericKeys.includes(key)) {
      val1 = Number(a[key]);
      val2 = Number(b[key]);
    }

    let comparison = 0;
    if (val1 > val2) {
      comparison = 1;
    }
    if (val1 < val2) {
      comparison = -1;
    }
    return order === 'DESC' ? comparison * -1 : comparison;
  };
}

function RenderTable() {
  const { data, filters, order } = useContext(StarWarsContext);
  const name = filters.filterByName.name;
  const arrayFilters = filters.filterByNumericValues;
  const column = order.column.toLowerCase();
  const sort = order.sort;

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0])
            .filter((element) => element !== 'residents')
            .map((key) => (
              <th key={key}>{key}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {filterData(data, name, arrayFilters)
          .sort(compareValues(column, sort))
          .map(({ residents, ...planet }) => (
            <tr key={planet.name}>
              <td data-testid="planet-name">{planet.name}</td>
              {Object.values(planet)
                .filter((value) => value !== planet.name)
                .map((value) => (
                  <td key={value}>{value}</td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default RenderTable;
