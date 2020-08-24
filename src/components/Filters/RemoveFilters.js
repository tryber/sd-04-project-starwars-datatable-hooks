import Proptypes from 'prop-types';
import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const RemoveFilters = () => {
  const { filterByNumericValues, setfilterByNumericValues } = useContext(StarWarsContext);
  const handleRemoveFilter = (item) => {
    // console.log(item)
    setfilterByNumericValues([...filterByNumericValues.filter(({ column }) => column !== item.column)]);
  };
  return filterByNumericValues.map((item) => (
    <div data-testid="filter" key={item.value}>
      <span>{`${item.column} ${item.comparison} ${item.value}`}</span>
      <button type="button" onClick={() => handleRemoveFilter(item)}>
        x
      </button>
    </div>
  ));
};

RemoveFilters.propTypes = {
  removeFilter: Proptypes.func.isRequired,
  numericValues: Proptypes.string.isRequired,
};

export default RemoveFilters;
