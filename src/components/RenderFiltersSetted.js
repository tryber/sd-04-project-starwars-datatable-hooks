import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../context';
import { setPlanetsFilteredByNumeric, removeFilter } from '../services/filterByNumeric';

export default function RenderFiltersSetted() {
  const { data, setData } = useContext(StarWarsContext);

  useEffect(() => {
    setPlanetsFilteredByNumeric(data, setData);
  }, [data.filterByNumericValues]);

  const { filterByNumericValues: filtersList } = data;
  return (
    <div>
      <h4>Filtros:</h4>
      {filtersList.map((filter) => (
        <div key={filter.column} data-testid="filter">
          <p>{`${filter.column} ${filter.comparison} ${filter.value}`}</p>
          <button
            type="button"
            onClick={() => {
              removeFilter(filter, data, setData);
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}
