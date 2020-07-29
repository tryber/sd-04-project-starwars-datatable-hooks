import React, { useContext } from 'react';
import SWContext from '../context/StarWarsContext';

const Filters = () => {
  const { columns, handleNumericFilter } = useContext(SWContext);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNumericFilter(e.target);
        }}
      >
        <label htmlFor="column">
          Selecione a coluna:
          <select name="column" data-testid="column-filter">
            {columns.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label htmlFor="comparison">
          <select name="comparison" data-testid="comparison-filter">
            <option defaultValue>Comparison</option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input name="number" type="number" data-testid="value-filter" />
        <button type="submit" data-testid="button-filter">
          Filtrar
        </button>
      </form>
    </div>
  );
};

export default Filters;
