import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const DeleteFunction = () => {
  const { filters, deleteFilters } = useContext(StarWarsContext);
  return (
    <div>
      <h2>Filtros:</h2>
      {filters.filterByNumericValues.map(({ columnTwo, comparisonTwo, valueTwo }) => (
        <div data-testid="filter" key={columnTwo}>
          <p>{`${columnTwo} ${comparisonTwo} ${valueTwo}`}</p>
          <button type="button" onClick={() => deleteFilters({ columnTwo, comparisonTwo, valueTwo })}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default DeleteFunction;
