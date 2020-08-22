import React from 'react';
import { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterXButton() {
  const { data, setData } = useContext(StarWarsContext);
  const { filterByNumericValues: numericFilters } = data;

  const onClick = (type) => {
    const newFilters = numericFilters.filter(
      ({ column }) => column !== type.column,
    );
    setData({ ...data, filterByNumericValues: newFilters });
  };

  return numericFilters.map((filtro) => (
    <div data-testid="filter" key={filtro.column}>
      <span>{`${filtro.column} - ${filtro.comparison} - ${filtro.value}`}</span>
      <button type="button" onClick={() => onClick(filtro)}>
        X
      </button>
    </div>
  ));
}

export default FilterXButton;
