import React, { useContext, useState } from 'react';
import FiltersContext from '../context/FiltersContext';

// Dropdown que seleciona o tipo da busca (População/Orbida/Diamentro/Rotação/Superficie)
// que será usado na 'selectACondition' para filtragem
const columnsInTable = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const selectAnOption = (state, setState, filters) => {
  const { column } = state;
  const { avaliableFilters } = filters;
  return (
    <select
      data-testid="column-filter"
      value={column}
      onChange={(event) => setState({ ...state, column: event.target.value })}
    >
      <option value="" />
      {avaliableFilters.reduce((acc, filter) => {
        if (filter.avaliable) {
          acc.push(
            <option value={filter.name} key={filter.name}>
              {filter.name}
            </option>,
          );
        }
        return acc;
      }, columnsInTable)}
    </select>
  );
};

// Seleção por condicionais baseado em (Maior_que/Menor_que/Igual_a) e input digitado
// Usa-se de tipo da 'selectAnOption' selecionado previamente á filtragem
const selectACondition = (state, setState) => {
  const { comparison } = state;
  return (
    <select
      data-testid="comparison-filter"
      value={comparison}
      onChange={(event) => setState({ ...state, comparison: event.target.value })}
    >
      <option value="" />
      <option value="maior que">maior que</option>
      <option value="menor que">menor que</option>
      <option value="igual a">igual a</option>
    </select>
  );
};

// Campo para receber input numerico para filtra busca na 'selectAnOption'
const inputNumber = (state, setState) => (
  <input
    data-testid="value-filter"
    type="number"
    placeholder="Digit a number"
    onChange={(event) => setState({ ...state, value: event.target.value })}
  />
);

const disableOption = (column, filters, setColumn) => {
  const { avaliableFilters } = filters;
  const response = avaliableFilters;

  response[response.findIndex((filter) => filter.name === column)].avaliable = false;
  setColumn(response);
};

const filterBtn = (state, setFiltersNumber, filters, setColumn) => {
  const { column, comparison, value } = state;
  return (
    <button
      data-testid="button-filter"
      type="button"
      onClick={() => {
        setFiltersNumber({ column, comparison, value });
        disableOption(column, filters, setColumn);
      }}
    >
      Filtrar
    </button>
  );
};

// busca baseada em nome
const enableOption = (column, index, filters, setColumn, deleteFilters) => {
  const { numberValuesForFilters, avaliableFilters } = filters;
  const response = avaliableFilters;

  response[response.findIndex((filter) => filter.name === column)].avaliable = true;
  setColumn(response);

  const response2 = numberValuesForFilters;
  response2.splice(index, 1);
  deleteFilters(response2);
};

// Ordenação da tabela pela seleção no Dropdown
const selectOrder = (state, setState) => (
  <div>
    <select
      data-testid="column-sort"
      id="orderColumn"
      onChange={(event) => setState({ ...state, orderColumn: event.target.value })}
    >
      <option>name</option>
      <option>climate</option>
      <option>created</option>
      <option>diameter</option>
      <option>edited</option>
      <option>films</option>
      <option>gravity</option>
      <option>orbital_period</option>
      <option>population</option>
      <option>rotation_period</option>
      <option>surface_water</option>
      <option>terrain</option>
      <option>url</option>
    </select>
  </div>
);

// Ordenação de Ascendente e Descendente com base no 'selectOrder' feito no Dropdown
const getOrdered = (state, setState, setOrder) => {
  const { orderColumn, orderSort } = state;
  return (
    <div>
      <p>Select order:</p>
      {selectOrder(state, setState)}
      <p>Asc</p>
      <input
        data-testid="column-sort-input-asc"
        type="radio"
        name="order"
        value="ASC"
        onClick={(event) => setState({ ...state, orderSort: event.target.value })}
      />
      <p>Desc</p>
      <input
        data-testid="column-sort-input-desc"
        type="radio"
        name="order"
        value="DESC"
        onClick={(event) => setState({ ...state, orderSort: event.target.value })}
      />
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={() => setOrder({ ...state, column: orderColumn, sort: orderSort })}
      >
        Order
      </button>
    </div>
  );
};

// Constante receber resultados dos valores numerico dos filtros
const { numberValuesForFilters } = filters;

// Provider do Contexto para filtros
const Filters = () => {
  const {
    filters,
    setFiltersName,
    setFiltersNumber,
    setColumn,
    deleteFilters,
    setOrder,
  } = useContext(FiltersContext);
  const [state, setState] = useState({// Estado e Set_Estado dos filtros
    column: '',
    comparison: '',
    value: '',
    filters: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
    orderColumn: 'name',
    orderSort: 'ASC',
  });
  return (
    <div>
      <h3>Filter results</h3>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Digit a planet name"
        value={filters.filterByName.name}
        onChange={(event) => setFiltersName(event.target.value)}
      />
      <p>Select an option:</p>
      {selectAnOption(state, setState, filters)}
      <p>Select a condition:</p>
      {selectACondition(state, setState)}
      {inputNumber(state, setState)}
      {filterBtn(state, setFiltersNumber, filters, setColumn)}
      {numberValuesForFilters.map((filter, index) => (
        <div data-testid="filter">
          {`${filter.column} ${filter.comparison} ${filter.value}`}
          <button type="button" onClick={() => 
          enableOption(filter.column, index, filters, setColumn, deleteFilters)}
          >
            X
          </button>
        </div>
      ))}
      {getOrdered(state, setState, setOrder)}
    </div>
    );};

export default Filters;
