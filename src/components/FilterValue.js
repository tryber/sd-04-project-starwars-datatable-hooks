import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function columnsName() {
  const coluna = [
    "",
    "population",
    "orbital_period",
    "diameter",
    "rotation_period",
    "surface_water",
  ];
  return coluna.map((el) => <option key={el}>{el}</option>);
}
function valorComparation() {
  const coparation = ["", "maior que", "igual a", "menor que"];
  return coparation.map((el) => <option key={el}>{el}</option>);
}

const FilterValue = () => {
  const { setData } = useContext(StarWarsContext);
  const [column, setColumn] = useState("");
  const [comparison, setComparison] = useState("");
  const [value, setValue] = useState(0);

  function onClick() {
    setData((data) => ({
      ...data,
      filterByNumericValues: [
        ...data.filterByNumericValues,
        { column, comparison, value },
      ], // clonando um obj novo
    }));
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        type="text"
        onChange={(event) => setColumn(event.target.value)}
      >
        {columnsName()}
      </select>
      <select
        data-testid="comparison-filter"
        type="text"
        onChange={(event) => setComparison(event.target.value)}
      >
        {valorComparation()}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={(event) => setValue(+event.target.value)}
      />
      <button data-testid="button-filter" onClick={() => onClick()}>
        Filtrar
      </button>
    </div>
  );
};

export default FilterValue;
