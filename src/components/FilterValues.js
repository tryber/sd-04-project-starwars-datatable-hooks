import React, { useContext } from 'react';
import StartWarsContext from '../context/StarWarsContext';

function FilterValues() {
  const {
    setNumericValues, column, setColumn,
    comparison, setComparison, value, setValue,
  } = useContext(StartWarsContext);

  const arrayComparison = ['', 'maior que', 'menor que', 'igual a'];
  const arrayColumns = [
    '', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  return (
    <div>
      <select
        data-testid="column-filter" value={column}
        onChange={(e) => setColumn(e.target.value)}
      >
        {arrayColumns.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter" value={comparison}
        onChange={(e) => setComparison(e.target.value)}
      >
        {arrayComparison.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        data-testid="value-filter" type="number"
        value={value} onChange={(e) => setValue(e.target.value)}
      />
      <button data-testid="button-filter" onClick={setNumericValues}>Filtrar</button>
    </div>
  );
}

export default FilterValues;
