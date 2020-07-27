import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import Filter from './Filter';

const options = {
  column: [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ],
  comparison: ['', 'maior que', 'menor que', 'igual a'],
};

const giveMeOptions = (arr, name, previousFilters = []) => {
  const filteredArr = arr.filter(
    (element) => !previousFilters.some((prevFilter) => prevFilter === element),
  );
  return filteredArr.map((elem) => (
    <option key={elem} name={name} value={elem}>
      {elem}
    </option>
  ));
};

const handleChange = (e, field, setComparison, setColumn) => {
  if (field === 'comparison') {
    return setComparison(e.target.value);
  }
  return setColumn(e.target.value);
};

const selectFields = (
  field,
  filterByValues,
  state,
  setComparison,
  setColumn,
) => {
  const prevFilters =
    field === 'column' ? filterByValues.map((elem) => elem[field]) : [];
  return (
    <select
      data-testid={`${field}-filter`}
      value={state[field]}
      onChange={(e) => handleChange(e, field, setComparison, setColumn)}
    >
      {giveMeOptions(options[field], field, prevFilters)}
    </select>
  );
};

const renderFilters = (filterByNumericValues) =>
  filterByNumericValues.map((elem) => {
    console.log('element', elem);
    const filterS = `${elem.column} ${elem.comparison} ${elem.value}`;
    return (
      <Filter
        key={`${elem.column}-${elem.value}`}
        filterString={filterS}
        column={elem.column}
      />
    );
  });

const NumericFilter = () => {
  const [column, setColumn] = React.useState('');
  const [comparison, setComparison] = React.useState('');
  const [value, setValue] = React.useState(0);
  const {
    filters: {
      filterByNumericValues: { filterByNumericValues, submitFilter },
    },
  } = useContext(StarWarsContext);
  const state = { column, comparison, value };

  const handleSubmit = (e) => {
    e.preventDefault();
    setColumn('');
    setComparison('');
    setValue(0);
  };

  return (
    <div>
      <form
        id="numericFilter"
        onSubmit={(e) => {
          submitFilter(e, { column, comparison, value });
          handleSubmit(e);
        }}
      >
        {selectFields('column', filterByNumericValues, state, setComparison)}
        {selectFields('comparison', filterByNumericValues, state, setColumn)}
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" form="numericFilter" data-testid="button-filter">
          Filtrar
        </button>
      </form>
      {renderFilters(filterByNumericValues)}
    </div>
  );
};

export default NumericFilter;
