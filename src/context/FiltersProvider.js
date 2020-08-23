import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FiltersContext from './FiltersContext';

// Estado inicial do filtros (default)
const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  numberValuesForFilters: [],
  avaliableFilters: [
    { name: 'population', avaliable: true },
    { name: 'orbital_period', avaliable: true },
    { name: 'diameter', avaliable: true },
    { name: 'rotation_period', avaliable: true },
    { name: 'surface_water', avaliable: true },
  ],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

// Provider (estados) para filtros
const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState(INITIAL_STATE);

// set para filtro de nome
  const setFiltersName = (name) => {
    setFilters((stateAtual) => ({ ...stateAtual, filterByName: { name } }));
  };

// set para filtro de numericos
  const setFiltersNumber = (obj) => {
    setFilters((stateAtual) => ({
      ...stateAtual,
      numberValuesForFilters: [...stateAtual.numberValuesForFilters, obj],
    }));
  };

// set pela seleção da coluna da tabela (dropdowns)
  const setColumn = (columnsInTable) => {
    setFilters((stateAtual) => ({ ...stateAtual, avaliableFilters: [...columnsInTable] }));
  };

// limpa filtro que estava setados
  const deleteFilters = (option) => {
    setFilters((stateAtual) => ({ ...stateAtual, numberValuesForFilters: [...option] }));
  };

// Seleção de ordenação da rendarização da tabela
  const setOrder = (order) => {
    setFilters((stateAtual) => ({ ...stateAtual, order: { ...order } }));
  };

  const filtContext = {
    filters,
    setFilters,
    setFiltersName,
    setFiltersNumber,
    setColumn,
    deleteFilters,
    setOrder,
  };

  return <FiltersContext.Provider value={filtContext}>{children}</FiltersContext.Provider>;
};

export default FiltersProvider;

FiltersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
