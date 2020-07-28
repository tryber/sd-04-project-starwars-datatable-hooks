import React, { useContext } from 'react';

import { StarWarsContext } from '../../context/StarWarsContext';

const FiltersApplied = () => {
  const { filter } = useContext(StarWarsContext);
  const filters = filter.filterByNumericValue;
  return (
    <div>
      {filter.length > 0 ? <h3>Filters Applied: </h3> : null}
      {filters ? filters.map((filtro) => (
        <div key={filtro.column}>
          <p>{filtro.column}</p>
          <p>{filtro.comparison}</p>
          <p>{filtro.value}</p>
        </div>
      )) : null}
    </div>
  );
};

export default FiltersApplied;
