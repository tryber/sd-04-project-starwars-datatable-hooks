import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function updateColumns(filters) {
  const columns = [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const chosenColumns = filters.filterByNumericValues.map(({ column }) => column);
  return columns.filter((item) => !chosenColumns.includes(item));
}

const FilterNumValues = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [numValues, setNumValues] = useState({
    column: '',
    comparison: '',
    number: '',
  });


  function handleOnChange(event, field) {
    setNumValues({ ...numValues, [field]: event.target.value });
  }

  function getColumns() {
    const selectColumn = updateColumns(filters);
    return (
      <select
        data-testid="column-filter"
        value={numValues.column}
        onChange={(event) => handleOnChange(event, 'column')}
      >
        {selectColumn.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  function getComparison() {
    const comparison = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        data-testid="comparison-filter"
        value={numValues.comparison}
        onChange={(event) => handleOnChange(event, 'comparison')}
      >
        {comparison.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  function handleOnClick() {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column: numValues.column, comparison: numValues.comparison, number: numValues.number },
      ],
    });
    setNumValues({ column: '', comparison: '', number: '' });
  }

  return (
    <div>
      {getColumns()}
      {getComparison()}
      <input
        data-testid="value-filter"
        type="number"
        value={numValues.number}
        onChange={(event) => handleOnChange(event, 'number')}
      />
      <button data-testid="button-filter" onClick={handleOnClick}>
        Filtrar
      </button>
    </div>
  );
};

export default FilterNumValues;
