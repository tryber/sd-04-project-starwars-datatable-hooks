import React from 'react';

const updateColumns = (numericValues) => {
  const columnValues = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const stateColumns = numericValues.map((element) => element.column);
  return [
    '',
    ...columnValues.filter((option) => !stateColumns.includes(option)),
  ];
};

export const getColumns = (changeColumns, numericValues, column) => {
  const select = updateColumns(numericValues);
  return (
    <select
        onChange={(event) => changeColumns(event)}
        data-testid="column-filter"
        value={column}
      >
        {select.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

  export const getRadios = (changeImput) => (
    <div>
      <input
        defaultChecked
        data-testid="column-sortoinput-asc"
        type="radio"
        id="ASC"
        name="order"
        valuer="ASC"
        onChange={(e) => changeImput(e)}
      />
      <label htmlFor="ASC">ASC</label>
      <input
        data-testid="column-sort-input-desc"
        type="radio"
        id="DESC"
        name="order"
        value="DESC"
        onChange={(e) => changeImput(e)}
      />
      <label htmlFor="DESC">DESC</label>
    </div>
  )

  export const getComparation = (changegComparation, comparation) => {
    const comparationValues = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        onChange={(e) => changegComparation(e)}
        data-testid="comparison-filter"
        value={comparation}
      >
        {comparationValues.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };
