import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import NumberFilter from './NumberFilter';

const listOfColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
const listOfComparisons = ['maior que', 'menor que', 'igual a'];

const listOfActiveColumns = [];

const SelectColumn = () => {
  const { setColumn, column, setComparison, setComparisonFilter } = useContext(StarWarsContext);

  const setActiveColumns = () => {
    listOfActiveColumns.push(column);
    setComparisonFilter(true);
  };

  return (
    <div className="container">
      <div className="container-box">
        <select
          data-testid="column-filter"
          name="column"
          onChange={(e) => setColumn(e.target.value)}
        >
          <option defaultValue>Column</option>
          {listOfColumns
            .filter((element) => !listOfActiveColumns.includes(element))
            .map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={(e) => setComparison(e.target.value)}
        >
          <option defaultValue>Comparison</option>
          {listOfComparisons.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <NumberFilter />
      <button type="button" onClick={() => setActiveColumns()} data-testid="button-filter">
        Filtrar
      </button>
    </div>
  );
};

export default SelectColumn;
