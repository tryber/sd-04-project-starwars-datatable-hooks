import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

// Gambiarra pro CC
const options = ['maior que', 'menor que', 'igual a'];

const ComparisonFilter = () => {
  const {
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    handleChange,
    numericValues,
    handleNumericValues,
  } = useContext(StarWarsContext);

  const availableFilters = () => {
    const columnOptions = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    let availableFilters = columnOptions;
    numericValues.forEach(({ column }) => {
      availableFilters = availableFilters.filter((element) => element !== column);
    });
    return availableFilters;
  };

  const filter = () => {
    handleNumericValues(column, comparison, value);
  };

  const columnOptions = availableFilters();
  return (
    <div>
      <select
        value={column}
        data-testid="column-filter"
        onChange={(event) => handleChange(event, setColumn)}
      >
        <option value="">selecionar</option>
        {columnOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        value={comparison}
        data-testid="comparison-filter"
        onChange={(event) => handleChange(event, setComparison)}
      >
        <option value="">selecionar</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        value={value}
        type="number"
        data-testid="value-filter"
        onChange={(event) => handleChange(event, setValue)}
      />
      <button data-testid="button-filter" onClick={() => filter()}>
        Filtrar
      </button>
    </div>
  );
};

export default ComparisonFilter;
