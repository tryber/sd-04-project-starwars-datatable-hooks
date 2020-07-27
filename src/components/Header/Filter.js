import React, {useContext} from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const Filter = (props) => {
  const {
    filters: {
      filterByNumericValues: {removeFilter},
    },
  } = useContext(StarWarsContext);
  return (
    <div data-testid="filter">
      <h2>{props.filterString}</h2>
      <button onClick={() => removeFilter(props.column)} type="button">
        X
      </button>
    </div>
  );
};

export default Filter;
