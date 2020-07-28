import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FilterName from './FilterName';
import ColumnSelect from '../components/ColumnSelect';
import Comparison from '../components/Comparison';

function SearchBar() {
  const { handleChange, onClick } = useContext(StarWarsContext);
  return (
    <div>
      <FilterName />
      <ColumnSelect />
      <Comparison />
      <input type="number" name="value" data-testid="value-filter" onChange={handleChange} />
      <button data-testid="button-filter" onClick={onClick}>
        Filter
      </button>
    </div>
  );
}

export default SearchBar;
