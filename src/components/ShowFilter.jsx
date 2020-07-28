import React, { useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';

const ShowFilter = (props) => {
  const {filters} = useContext(StarWarsContext)
  const filter = filters.filterByNumericValues;
  if (filter.length === 0) return null;
  return (
    <div className="numeric-filters">
      {filter.map(({ column, comparison, value }) => (
        <div key={column}>
          <span>{column}</span>
          <span> - {comparison}</span>
          <span> - {value}</span>
        </div>
      ))}
    </div>
  );
};

export default ShowFilter;
