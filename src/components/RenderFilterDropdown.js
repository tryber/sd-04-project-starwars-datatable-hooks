import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../context';
import {
  setNumericFilterVariables,
  setPlanetsFilteredByNumeric,
} from '../services/filterByNumeric';

export default function RenderFilterDropdown() {
  const { data, setData } = useContext(StarWarsContext);

  useEffect(() => {
    setPlanetsFilteredByNumeric(data, setData);
  }, [data.filterByNumericValues]);

  const { filterByNumericValues: filtersList } = data;

  const listOfColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const listOfComparisons = ['maior que', 'menor que', 'igual a'];
  const columns = filtersList.map((filter) => filter.column);

  return (
    <div>
      <h4>Definir filtro:</h4>
      <select data-testid="column-filter" id="column">
        <option defaultValue>Coluna</option>
        {listOfColumns
          .filter((col) => !columns.includes(col))
          .map((column) => (
            <option key={column} value={column}>
              {column}
            </option>
          ))}
      </select>
      <select data-testid="comparison-filter" id="comparison">
        <option defaultValue>Comparação</option>
        {listOfComparisons.map((comparison) => (
          <option key={comparison} value={comparison}>
            {comparison}
          </option>
        ))}
      </select>
      <input data-testid="value-filter" type="number" id="value" />
      <button
        data-testid="button-filter"
        type="button"
        onClick={() => {
          const newFilter = {
            column: document.querySelector('#column').value,
            comparison: document.querySelector('#comparison').value,
            value: document.querySelector('#value').value,
          };
          setNumericFilterVariables(newFilter, data, setData);
        }}
      >
        Filtrar
      </button>
    </div>
  );
}
