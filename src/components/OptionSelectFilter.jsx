import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const columnFilterElement = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const OptionSelectFilter = () => {
  const [state, setState] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const handleFilterNumericChange = (element, field) => {
    setState((stateFilter) => ({
      ...stateFilter,
      [field]: element,
    }));
  };

  const { filters, setNumericFilter } = useContext(StarWarsContext);

  return (
    <div>
      <select
        onChange={(event) => handleFilterNumericChange(event.target.value, 'column')}
        data-testid="column-filter"
      >
        <option />
        {columnFilterElement.map(
          (option) =>
            !filters.filterByNumericValues.find(({ column }) => column === option) && (
              <option key={option}>{option}</option>
            ),
        )}
      </select>
      <select
        onChange={(event) => handleFilterNumericChange(event.target.value, 'comparison')}
        data-testid="comparison-filter"
      >
        <option />
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        onChange={(event) => handleFilterNumericChange(event.target.value, 'value')}
        data-testid="value-filter"
        type="number"
      />
      <button onClick={() => setNumericFilter(state)} type="button" data-testid="button-filter">
        Filters
      </button>
    </div>
  );
};

export default OptionSelectFilter;
