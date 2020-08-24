import React, { useContext, useState } from 'react';

import StarWarsContext from '../../context/StarWarsContext';

const FilterValue = () => {
  const { columns, handleFilter } = useContext(StarWarsContext);
  const [thisState, setThisState] = useState({ column: '', comparison: '', value: '' });
  const handleChange = (event) => {
    setThisState({ ...thisState, [event.target.name]: event.target.value });
  };

  // const handleSubmit = () => {
  //   const { column, comparison, value } = thisState;
  //   const { filterByValues } = thisState;
  //   if (column !== '' && comparison !== '' && value !== '') {
  //     handleFilter(column, comparison, value);
  //   }
  //   setThisState({ column: '', comparison: '', value: '' });
  // };

  // const filterColumn = () => {
  //   const columns = [
  //     '',
  //     'population',
  //     'orbital_period',
  //     'diameter',
  //     'rotation_period',
  //     'surface_water',
  //   ];
  //   const selectedFilter = columns.map(({ column }) => column);
  //   return columns.filter((column) => !selectedFilter.includes(column));
  // };

  const renderColumns = () => {
    const options = [
      '',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    return (
      <select
        data-testid="column-filter"
        name="column"
        value={thisState}
        onChange={(event) => handleChange(event)}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  };

  const renderComparison = () => {
    const comparison = ['', 'maior que', 'igual a', 'menor que'];
    return (
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={thisState}
        onChange={(event) => handleChange(event)}
      >
        {comparison.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div>
      {renderColumns()}
      {renderComparison()}
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        value={thisState}
        onChange={(event) => handleChange(event)}
      />
      <button type="button" data-testid="button-filter" onClick={() => console.log('aa')}>
        filter
      </button>
    </div>
  );
};

export default FilterValue;
