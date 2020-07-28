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

function RenderTable() {
  const { data, filters } = useContext(StarWarsContext);
  const name = filters.filterByName.name;
  const arrayFilters = filters.filterByNumericValues;
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
        {filterData(data, name, arrayFilters).map(
          ({ residents, ...planet }) => (
            <tr key={planet.name}>
              {Object.values(planet).map((value) => (
                <td key={value}>{value}</td>
              ))}
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}

export default RenderTable;
