import React, { useContext } from 'react';
import starWarsContext from '../context/StarWarsContext';
import Button from './Button';

function ListFilter() {
  const { getFilterNumericValues, setStateFilter } = useContext(starWarsContext);

  if (getFilterNumericValues().length === 0) return <div />;

  return (
    <div>
      <h3>Filtros</h3>
      {getFilterNumericValues().map(({ column, comparison, value }) => (
        <div data-testid="filter" key={column}>
          {column} {comparison} {value}
          <Button
            testid="list-filter"
            onClick={() => {
              setStateFilter({ column }, 'REMOVEFILTER');
            }}
          >
            {'X'}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default ListFilter;
