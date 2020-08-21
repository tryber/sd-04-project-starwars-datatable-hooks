import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context';

function MakeFilterXButtons() {
  const { data, setData } = useContext(AppContext);
  const { filterByNumericValues: numericFilters } = data;

  const onClick = (type) => {
    console.log(numericFilters, 'numeric filters');
    const newFilters = numericFilters.filter(({ column }) => {
      console.log(column);
      return column !== type.column;
    });
    console.log(newFilters, 'new filters');
    setData({ ...data, filterByNumericValues: newFilters });
  };

  return numericFilters.map((filtro) => (
    <div data-testid="filter" key={filtro.column}>
      {console.log(filtro)}
      <span>{`${filtro.column} - ${filtro.comparison} - ${filtro.value}`}</span>
      <button type="button" onClick={() => onClick(filtro)}>
        X
      </button>
    </div>
  ));
}

export default MakeFilterXButtons;
