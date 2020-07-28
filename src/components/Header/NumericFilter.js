import React, { useContext, useState } from 'react';
import { starContext } from '../../context';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const NumericFilter = () => {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(starContext);

  const [formInfo, setFormInfo] = useState({});

  const activeFilters = filterByNumericValues.map((filter) => filter.column);
  const filteredColumns = columns.filter((c) => !activeFilters.includes(c));

  const onSubmit = (e) => {
    e.preventDefault();
    setFilterByNumericValues([
      ...filterByNumericValues,
      formInfo,
    ]);
  };

  const onChange = ({ target: { value, name } }) => {
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <select name="column" data-testid="column-filter" onChange={onChange} required>
        <option value="" defaultValue>Coluna</option>
        {filteredColumns.map((e) => <option key={e} value={e}>{e}</option>)}
      </select>
      <select name="comparison" data-testid="comparison-filter" onChange={onChange} required>
        <option value="" defaultValue>Comparação</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        placeholder="Valor"
        onChange={onChange}
        required
      />
      <button data-testid="button-filter" type="submit">Filtrar</button>
    </form>
  );
};

export default NumericFilter;
