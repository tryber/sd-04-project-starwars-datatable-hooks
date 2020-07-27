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

  const handleChange = (e, field) => {
    switch (field) {
      case 'value':
        setValue(e.target.value);
        break;
      case 'comparison':
        setComparison(e.target.value);
        break;
      case 'column':
        setColumn(e.target.value);
        break;
      default:
        console.log('default');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setColumn('');
    setComparison('');
    setValue(0);
  };

  const selectFields = (field) => {
    const prevFilters =
      field === 'column'
        ? filterByNumericValues.map((elem) => elem[field])
        : [];
    return (
      <select
        data-testid={`${field}-filter`}
        value={state[field]}
        onChange={(e) => handleChange(e, field)}
      >
        {giveMeOptions(options[field], field, prevFilters)}
      </select>
    );
  };

  const renderFilters = () =>
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

  return (
    <div>
      <form
        id="numericFilter"
        onSubmit={(e) => {
          submitFilter(e, { column, comparison, value });
          handleSubmit(e);
        }}
      >
        {selectFields('column')}
        {selectFields('comparison')}
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
      {renderFilters()}
    </div>
  );
};

export default NumericFilter;
