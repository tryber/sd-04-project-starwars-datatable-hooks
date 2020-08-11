import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import getAPI from '../service/StarWarsAPI';

const StarsWarsContext = createContext();

const StarsWarsProvider = ({ children }) => {
  // Estado de controle requisição API
  // const [isFetching, setIsFetching] = useState(false);
  const [value, setValue] = useState(0);
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'Name', sort: 'ASC' },
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

  const deleteFilter = (column) => {
    setFilters((old) => ({
      ...old,
      filterByNumericValues: old.filterByNumericValues.filter(
        (index) => index !== column
      ),
    }));
  };

  // Fazendo a requisição
  const fetchAPI = async () => {
    getAPI().then((data) => {
      setData(data.results);
    });
  };

  function filter(data) {
    let filterData = [...data];

    if (filters) {
      filterData = data.filter((planeta) =>
        planeta.name.toLowerCase().includes(filters.filterByName.name)
      );
    }

    if (filters.filterByNumericValues.length !== 0) {
      filters.filterByNumericValues.forEach((itens) => {
        if (itens.comparison === 'maior que') {
          filterData = filterData.filter(
            (item) => Number(item[itens.column]) > Number([itens.value])
          );
        }
        if (itens.comparison === 'igual a') {
          filterData = filterData.filter(
            (item) => Number(item[itens.column]) === Number([itens.value])
          );
        }
        if (itens.comparison === 'menor que') {
          filterData = filterData.filter(
            (item) => Number(item[itens.column]) < Number([itens.value])
          );
        }
      });
    }

    return filterData;
  }

  const columnSelect = (columnCat) => {
    const columnCategorias = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];

    columnCategorias.map((categoria) => {
      return [...columnCategorias.filter((e) => !e.includes(categoria))];
    });
  };
  const context = {
    addValues,
    column,
    comparison,
    value,
    setColumn,
    setComparison,
    setValue,
    filter,
    filters,
    fetchAPI,
    data,
    inputName,   
    columnSelect,
    deleteFilter,
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
