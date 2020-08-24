import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const RemoveFilter = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;
  const handleOnClick = (itemFilter) => {
    const filtered = [...filterByNumericValues.filter((item) => item !== itemFilter)];
    setFilters({ ...filters, filterByNumericValues: filtered });
  };
  return (
    <div>
      Filtros utilizados:
      <div>
        {filterByNumericValues.map((item) => (
          <div key={`${item.column} - ${item.comparison}`} data-testid="filter">
            <p>{`${item.column} - ${item.comparison} - ${item.number}`}</p>
            <button type="button" onClick={() => handleOnClick(item)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemoveFilter;
