import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const StarWarsContext = createContext();

export const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [value, setValue] = useState();
  const [sort, setSort] = useState();
  const [sortColumn, setSortColumn] = useState();
  const [addFilter, setAddFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const [filtros, setFiltros] = useState({
    loading: true,
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const addValues = (newcolumn, newcomparison, newvalue) => {
    setFiltros((old) => ({
      ...old,
      filterByNumericValues: [
        ...old.filterByNumericValues,
        { column: newcolumn, comparison: newcomparison, value: newvalue },
      ],
    }));
  };

  const SortButton = (newsort, newcolumn) => {
    setFiltros((old) => ({
      ...old,
      order: { column: newcolumn, sort: newsort },
    }));
  };

  const inputText = (event) => {
    setFiltros((old) => ({
      ...old,
      filterByName: { name: event },
    }));
  };

  const deletFilter = (filter) => {
    setFiltros((old) => ({
      ...old,
      filterByNumericValues: old.filterByNumericValues.filter((filtro, index) => index !== filter),
    }));
  };

  const context = {
    deletFilter,
    SortButton,
    addFilter,
    addValues,
    column,
    comparison,
    filtros,
    headers,
    inputText,
    planets,
    setAddFilter,
    setColumn,
    setComparison,
    setFiltros,
    setHeaders,
    setPlanets,
    setSort,
    setSortColumn,
    setValue,
    sort,
    sortColumn,
    value,
  };
  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
