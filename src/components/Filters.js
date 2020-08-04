import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filters = () => {
  const { filterByNumericValues, clearFilter } = useContext(StarWarsContext);

  if (filterByNumericValues.length === 0) return <div />;
  return (
    <div>
      {filterByNumericValues.map(({ column, comparison, value }) => (
        <div data-testid="filter" key={column}>
          <span>{`${column} - `}</span>
          <span>{`${comparison} - `}</span>
          <span>{value}</span>
          <button type="button" onClick={() => clearFilter(column)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Filters;
