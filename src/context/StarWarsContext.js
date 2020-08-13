import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import getAPI from '../service/StarWarsAPI';

const StarsWarsContext = createContext();

const StarsWarsProvider = ({ children }) => {
  // Estado de controle requisição API
  const [value, setValue] = useState(0);
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [sort, setSort] = useState();
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  });

  const inputName = (event) => {
    setFilters((oldName) => ({
      ...oldName,
      filterByName: { name: event },
    }));
  };

  const addValues = (_column, _comparison, _value) => {
    setFilters((oldFilters) => ({
      ...oldFilters,
      filterByNumericValues: [
        ...oldFilters.filterByNumericValues,
        { column: _column, comparison: _comparison, value: _value },
      ],
    }));
  };

  const deleteFilter = (col) => {
    setFilters((old) => ({
      ...old,
      filterByNumericValues: old.filterByNumericValues.filter(
        (index) => index !== col
      ),
    }));
  };

  const columnSort = (_colum, _sort) => {
    setFilters((old) => ({
      ...old,
      order: { column: _colum, sort: _sort },
    }));
  };

  // Fazendo a requisição
  const fetchAPI = async () => {
    getAPI().then((json) => {
      setData(json.results);
    });
  };

/* 
  Esta função de ordenção até a linha 90
  foi feito com a ajuda do colega/amigo
  Frederico Campello turma 04
*/

  const numericKeys = [
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
    'population',
  ];

  const ascSortNumber = (filtered, col) =>
    filtered.sort((a, b) => Number(a[col]) - Number(b[col]));

  const ascSortString = (filtered, collum) =>
    filtered.sort((a, b) => {
      if (a[collum] > b[collum]) return 1;
      if (a[collum] < b[collum]) return -1;
      return 0;
    });

  const orderAscDesc = (filtered) => {
    const sorted = numericKeys.includes(filters.order.column)
      ? ascSortNumber(filtered, filters.order.column)
      : ascSortString(filtered, filters.order.column);
    return filters.order.sort === 'DESC' ? sorted.reverse() : sorted;
  };

  const context = {
    addValues,
    column,
    comparison,
    value,
    sort,
    setSort,
    setColumn,
    setComparison,
    setValue,
    filters,
    fetchAPI,
    data,
    inputName,
    deleteFilter,
    orderAscDesc,
    columnSort,
  };

  return (
    <StarsWarsContext.Provider value={context}>
      {children}
    </StarsWarsContext.Provider>
  );
};

StarsWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarsWarsProvider, StarsWarsContext };
