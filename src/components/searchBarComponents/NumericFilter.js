import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function NumericFilter() {
  const { filters, handleChange, NumericOnClick } = useContext(StarWarsContext);

  const availableFilters = () => {
    const filtersTitles = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const { filterByNumericValues } = filters;
    let newFilter = filtersTitles;
    Object.keys(filterByNumericValues).forEach(({ column }) => {
      newFilter = newFilter.filter((elem) => elem !== column);
    });
    return newFilter;
  };

  const optionFilter = availableFilters();
  return (
    <form className="numberInput" onSubmit={(e) => NumericOnClick(e)}>
      <label htmlFor="form">Numeric Filter:</label><br />
      <select
        data-testid="column-filter" name="column" className="input"
        onChange={(e) => handleChange(e)}
      >
        <option defaultValue>Column</option>
        {optionFilter.map((filter) => (
          <option key={filter} value={filter}>{filter}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter" name="comparison" className="input"
        onChange={(e) => handleChange(e)}
      >
        <option defaultValue>Comparison</option>
        <option value="menor que">menor que</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
      </select><br />
      <input
        data-testid="value-filter" type="number" className="input" name="value"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" data-testid="button-filter">Filter</button>
    </form>
  );
}

export default NumericFilter;
