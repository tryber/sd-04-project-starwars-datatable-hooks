import React, { useContext } from 'react';
import FilterItem from './FilterItem';
import { starContext } from '../../../context';

const FiltersList = () => {
  const { filterByNumericValues } = useContext(starContext);

  return (
    <div>
      Filtros:
      {filterByNumericValues.map((filter) => <FilterItem key={filter.column} filter={filter} />)}
    </div>
  );
};

export default FiltersList;
