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

  // Colunas numericas
  const numericKeys = [
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
    'population',
  ];

  // Ordenando colunas
  const orderTable = (filtered) => {
    // Verifica se a coluna é numerica
    if (numericKeys.includes(filters.order.column)) {
      if (filters.order.sort === 'ASC') {
        return filtered.sort(
          (a, b) =>
            Number(a[filters.order.column]) - Number(b[filters.order.column])
        );
      }
      if (filters.order.sort === 'DESC') {
        return filtered.sort(
          (a, b) =>
            Number(b[filters.order.column]) - Number(a[filters.order.column])
        );
      }
    }

    /*
      A função sort recebe dois parametros.
      Se retornar -1 indica que a vêm antes de b.
      Se retornar 1 indica que b vêm antes de a.
      Se retornar 0 são iguais, não faz nada.
      Referência: https://www.smashingmagazine.com/2020/03/sortable-tables-react/
    */
    filtered.sort((a, b) => {
      if (
        a[filters.order.column.toLowerCase()] <
        b[filters.order.column.toLowerCase()]
      ) {
        return -1;
      }

      if (
        a[filters.order.column.toLowerCase()] >
        b[filters.order.column.toLowerCase()]
      ) {
        return 1;
      }

      return 0;
    });
    return filters.order.sort === 'DESC' ? filtered.reverse() : filtered;
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
    orderTable,
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
