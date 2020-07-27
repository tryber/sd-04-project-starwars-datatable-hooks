import React from 'react';

// const renderFirstFilter = () => (
//   <div>
//     <select data-testid="column-filter">
//       <option value="">Coluna</option>
//       <option value="population">population</option>
//       <option value="orbital_period">orbital_period</option>
//       <option value="diameter">diameter</option>
//       <option value="rotation_period">rotation_period</option>
//       <option value="surface_water">surface_water</option>
//     </select>
//   </div>
// );

// const renderSecondFilter = () => (
//   <div>
//     <select data-testid="comparison-filter">
//       <option value="">Comparação</option>
//       <option value="maior que">maior que</option>
//       <option value="igual a">igual a</option>
//       <option value="menor que">menor que</option>
//     </select>
//     <input type="number" data-testid="value-filter" />
//     <button type="button" data-testid="button-filter">
//       Filtrar
//     </button>
//   </div>
// );

constructor(props) {
  super(props);
  this.state = {
    column: '',
    comparison: '',
    value: '',
  };
}

handleInputValue({ target: { value, name } }) {
  this.setState({ [name]: String(value) });
}

renderFirstFilter() {
  const { column } = this.state;
  const { filterKeys } = this.props; // loadElementFilter
  return (
    <div>
      <select
        id="filtro-coluna"
        value={column}
        name="column"
        data-testid="column-filter"
        onChange={(e) => {
          this.handleInputValue(e);
        }}
      >
        <option value="">Coluna</option>
        {filterKeys.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
        {/* <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
      </select>
    </div>
  );
}

renderSecondFilter() {
  const { comparison, value } = this.state;
  const { filterPlanets } = this.props; // Função do filtro.
  return (
    <div>
      <select
        value={comparison}
        name="comparison"
        data-testid="comparison-filter"
        onChange={(e) => this.handleInputValue(e)}
      >
        <option value="">Comparação</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        type="number"
        value={value}
        name="value"
        data-testid="value-filter"
        onChange={(e) => this.handleInputValue(e)}
      />
      <button type="button" data-testid="button-filter" onClick={() => filterPlanets(this.state)}>
        Filtrar
      </button>
    </div>
  );
};

const Filters = () => {
  return (
    <div>
      {this.renderFirstFilter()}
      {this.renderSecondFilter()}
    </div>
  );
};

export default Filters;
