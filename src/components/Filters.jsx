import React, { useContext } from 'react';
import SWContext from '../context/StarWarsContext';

const Filters = () => {
  const { columns, setfilterByNumericValues, handleNumericFilter } = useContext(SWContext);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNumericFilter(e.target);
        }}
      >
        <label>
          Selecione a coluna:
          <select name="column">
            {columns.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          <select name="comparison">
            <option defaultValue>Comparison</option>
            <option value="maior que">Maior que</option>
            <option value="menor que">Menor que</option>
            <option value="igual a">Igual a</option>
          </select>
        </label>
        <input name="number" type="number" />
        <button type="submit">Filtrar</button>
      </form>
    </div>
  );
};

export default Filters;
