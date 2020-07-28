import React, { useState } from 'react';
import { useStarWars } from '../context/StarWarsContext';

// prettier-ignore
const dropDownColumnFilter = ['column', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const dropDownComparisonFilter = ['comparison', 'maior que', 'menor que', 'igual a'];

const dropDownColumnUpdated = (filterByNumericValues) => {
  const dropDown = [...dropDownColumnFilter];
  filterByNumericValues.forEach(({ column }) => {
    dropDown.splice(dropDown.indexOf(column), 1);
  });
  return dropDown;
};

// prettier-ignore
const selectOption = (datatest, dropDown, nome, setFilter, filter) => (
  <select
    data-testid={datatest}
    name={nome}
    value={filter[nome]}
    onChange={({ target: { value, name } }) => setFilter((state) => {
      const filterState = { ...state };
      filterState[name] = value;
      return filterState;
    })}
  >
    {dropDown.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
  </select>
);

const inputAndButtonToFilter = (setFilter, filter, setFiltersNumeric, filtersNumeric) => (
  <div>
    <input
      type="number"
      data-testid="value-filter"
      placeholder="Digite um Numero"
      value={filter.value}
      onChange={(e) => {
        // prettier-ignore
        setFilter(({ ...filter, value: Number(e.target.value) }));
      }}
    />

    <button
      data-testid="button-filter"
      onClick={() => setFiltersNumeric([...filtersNumeric, filter])}
    >
      filtrar
    </button>
  </div>
);

const FormFilters = () => {
  const [filter, setFilter] = useState({
    column: 'column',
    comparison: 'comparison',
    value: '',
  });
  const { textInput, setTextInput, filtersNumeric, setFiltersNumeric } = useStarWars();

  return (
    <div>
      <form>
        <input
          data-testid="name-filter"
          placeholder="Digite o nome de um planeta..."
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        {
          // prettier-ignore
          selectOption('column-filter', dropDownColumnUpdated(filtersNumeric), 'column', setFilter, filter)
        }
        {
          // prettier-ignore
          selectOption('comparison-filter', dropDownComparisonFilter, 'comparison', setFilter, filter)
        }
        {inputAndButtonToFilter(setFilter, filter, setFiltersNumeric, filtersNumeric)}
      </form>
    </div>
  );
};

export default FormFilters;
