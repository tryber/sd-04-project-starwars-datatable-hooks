import React from 'react'


export default function RenderFiltersOrder(planetsData, setOrder, setFilteredPlanetsByOrder) {
  const columns = Object.keys(planetsData[0]);
  return (
    <div>
      <h4>Ordenar:</h4>
      <select data-testid="column-sort" id="column-sort">
        {columns
          .filter((title) => title !== 'residents')
          .map((title) => (
            <option key={title}>{title}</option>
          ))}
      </select>
      <input type="radio" id="ASC" name="column" data-testid="column-sort-input" value="ASC" />
      <label htmlFor="ASC">ASC</label>
      <input type="radio" id="DESC" name="column" data-testid="column-sort-input" value="DESC" />
      <label htmlFor="DESC">DESC</label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={() => {
          const selectedSort = document.querySelector('input[name="column"]:checked').value;
          const selectedColumn = document.querySelector('#column-sort').value;
          const order = {
            column: selectedColumn,
            sort: selectedSort,
          };
          setOrder(order);
          setFilteredPlanetsByOrder();
        }}
      >
        Filtrar
      </button>
    </div>
  );
}
