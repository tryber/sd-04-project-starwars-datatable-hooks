import React, { useState, useContext } from 'react';
import CreateInputColumn from './CreateInputColumn';
import CreateInputValue from './CreateInputValue';
import CreateInputComparison from './CreateInputComparision';
import { StarWarsContext } from '../../context/StarWarsProvider';

const FilterByNumericValues = () => {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const { changeFilterColumn } = useContext(StarWarsContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    changeFilterColumn(column, comparison, value);
    setColumn('');
    setComparison('');
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Filter by numeric values</h4>
      <CreateInputColumn changeColumn={setColumn} value={column} />
      <CreateInputComparison changeComparison={setComparison} value={comparison} />
      <CreateInputValue changeValue={setValue} value={value} />
      <button className="btn-small btn-dark" data-testid="button-filter" type="submit">
        Apply filter
      </button>
    </form>
  );
};

export default FilterByNumericValues;
