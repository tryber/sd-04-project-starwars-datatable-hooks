import React, { useContext, useState } from 'react';
import SWContext from '../context/StarWarsContext';

const Filters = () => {
  const { columns, handleNumericFilter } = useContext(SWContext);
  const [localState, setLocalState] = useState({ column: '', comparison: '', number: '' });
  const handleChange = ({ name, value }) => {
    setLocalState({ ...localState, [name]: value });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { column, comparison, number } = localState;
          handleNumericFilter(column, comparison, number);
        }}
      >
        <label htmlFor="column">
          Selecione a coluna:
          <select
            name="column"
            data-testid="column-filter"
            onChange={(e) => handleChange(e.target)}
          >
            {columns.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label htmlFor="comparison">
          <select
            name="comparison"
            data-testid="comparison-filter"
            onChange={(e) => handleChange(e.target)}
          >
            <option defaultValue>Comparison</option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input
          name="number"
          type="number"
          onChange={(e) => handleChange(e.target)}
          data-testid="value-filter"
        />
        <button type="submit" data-testid="button-filter">
          Filtrar
        </button>
      </form>
    </div>
  );
};

export default Filters;
