import React, { useContext } from "react";
import StartWarsContext from "../context/StarWarsContext";

function Columns() {
  const { column, setColumn } = useContext(StartWarsContext);
  const arrayColumns = [
    "",
    "population",
    "orbital_period",
    "diameter",
    "rotation_period",
    "surface_water",
  ];
  return (
    <select
      data-testid="column-filter"
      value={column}
      onChange={(e) => setColumn(e.target.value, "column")}
    >
      {arrayColumns.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default Columns;
