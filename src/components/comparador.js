import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const Comparador = () => {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(
    StarWarsContext,
  );
  const CreateOptions = () => {
    return {
      first: [
        '',
        'population',
        'orbital_period',
        'diameter',
        'rotation_period',
        'surface_water',
      ],
      second: ['', 'maior que', 'menor que', 'igual a'],
    };
  };

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);

  const comparisonMethod = () => {
    setFilterByNumericValues([
      ...filterByNumericValues,
      { column, comparison, value },
    ]);
  };

  const inputMethod = (event) => {
    if (event.target.name === 'column') {
      setColumn(event.target.value);
    }
    if (event.target.name === 'comparison') {
      setComparison(event.target.value);
    }
    if (event.target.name === 'value') {
      setValue(event.target.value);
    }
  };

  const filterMethod = (options, filterByNumericValues) => {
    if (filterByNumericValues.length === 0) {
      return options;
    }
    let newOptions = [...options];
    filterByNumericValues.forEach((filter) => {
      newOptions = newOptions.filter((option) => option !== filter.column);
    });
    return newOptions;
  };

  const renderSelect = (filteredOptions, test, name, value) => {
    return (
      <select
        name={name}
        onChange={(event) => inputMethod(event)}
        data-testid={test}
        value={value}
      >
        {filteredOptions.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

  const renderSecondSelect = (filteredOptions, test, name, value) => {
    return (
      <select
        name={name}
        onChange={(event) => inputMethod(event)}
        data-testid={test}
        value={value}
      >
        {filteredOptions.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };
  const options = CreateOptions();
  const newOptions = filterMethod(options.first, filterByNumericValues);
  return (
    <div>
      {renderSelect(newOptions, 'column-filter', 'column', column)}
      {renderSecondSelect(options.second, 'comparison-filter', 'comparison')}
      <input
        data-testid="value-filter"
        type="text"
        name="value"
        onChange={(event) => inputMethod(event)}
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={() =>
          setFilterByNumericValues([
            ...filterByNumericValues,
            { column: column, comparison: comparison, value: value },
          ])
        }
      >
        Filtrar
      </button>
    </div>
  );
};

export default Comparador;
