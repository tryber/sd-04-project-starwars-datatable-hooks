import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

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
  const {
    setColumn,
    setComparison,
    setValue,
    setComparisonFilter,
  } = useContext(StarWarsContext);

  const setActiveColumns = (event) => {
    listOfActiveColumns.push(event.target.value);
    setColumn(event.target.value);
  };

  return (
    <div className="container">
      <div className="container-box">
        <select data-testid="column-filter" name="column" onChange={(e) => setActiveColumns(e)}>
          <option defaultValue>Column</option>
          {listOfColumns.filter((element) => !listOfActiveColumns.includes(element))
            .map((option) => <option key={option} value={option}>{option}</option>)
          }
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={(e) => setComparison(e.target.value)}
        >
          <option defaultValue>Comparison</option>
          {listOfComparisons.map((option) => <option key={option}>{option}</option>)}
        </select>
      </div>
      <input
        type="number" data-testid="value-filter" onChange={(e) => setValue(e.target.value)}
        name="value"
      />
      <button type="button" onClick={() => setComparisonFilter(true)} data-testid="button-filter">
        Filtrar
      </button>
    </div>
  );
};

export default SelectColumn;
