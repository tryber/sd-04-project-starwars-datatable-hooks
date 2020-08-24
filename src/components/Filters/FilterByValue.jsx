import React, { useContext, useState } from 'react';

import StarWarsContext from '../../context/StarWarsContext';

const renderColumns = (thisState, filterColumn, filterByNumericValues, handleChange) => {
  const options = filterColumn(filterByNumericValues);
  return (
    <select
      data-testid="column-filter" name="column" value={thisState.column}
      onChange={(event) => handleChange(event)}
    >
      {options.map((item) => (
        <option key={item} value={item}>{item}</option>
        ))}
    </select>
  );
};
const renderComparison = (thisState, handleChange) => {
  const comparison = ['', 'maior que', 'igual a', 'menor que'];
  return (
    <select
      data-testid="comparison-filter" name="comparison"
      value={thisState.comparison} onChange={(event) => handleChange(event)}
    >
      {comparison.map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
  );
};
const FilterValue = () => {
  const { filterByNumericValues, setfilterByNumericValues } = useContext(StarWarsContext);
  const [thisState, setThisState] = useState({});
  const handleChange = (event) => {
    setThisState({ ...thisState, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (thisState.column) {
      setfilterByNumericValues([
        ...filterByNumericValues,
        {
          column: thisState.column,
          comparison: thisState.comparison,
          value: thisState.value,
        },
      ]);
    }
  };
  const filterColumn = () => {
    const columns = [
      '', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ];
    const selectedFilter = filterByNumericValues.map(({ column }) => column);
    return columns.filter((column) => !selectedFilter.includes(column));
  };
  return (
    <div>
      {renderColumns(thisState, filterColumn, filterByNumericValues, handleChange)}
      {renderComparison(thisState, handleChange)}
      <input
        type="number" data-testid="value-filter" name="value"
        value={thisState.value} onChange={(event) => handleChange(event)}
      />
      <button type="button" data-testid="button-filter" onClick={(e) => handleSubmit(e)}>
        filter
      </button>
    </div>
  );
};

export default FilterValue;
