import React, { useContext, useEffect } from 'react';
import Header from './Header';
import Filters from './Filters';
import StarWarContext from '../context/StarWarsContext';
import FiltersContext from '../context/FiltersContext';
import fetchStarWars from '../services/StarWarsAPI';

// Filtro por busca pelo nome do input
const filteringName = (filters, data) => {
  const { filterByName: { name } } = filters;
  return data.filter((planet) => planet.name.includes(name));
};

// Filtro para buscas de comparação (maior_que/menor_que/igual_a)
function comparionFilter(column, comparison, value, planet) {
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    default:
      return [];
  }
}

// Valores resultante das busca limitada pelos filtros
const getFilteredValues = (filters, data) => {
  const { numberValuesForFilters } = filters;
  if (numberValuesForFilters) {
    return numberValuesForFilters.reduce(
      (acc, { column, comparison, value }) =>
        acc.filter((planet) => comparionFilter(column, comparison, value, planet)),
      filteringName(filters, data),
    );
  }
  return filteringName(filters, data);
};

// returno em caso de ordenação Ascendente
function ascOrder(columnA, columnB) {
  if (columnA > columnB) return 1;
  return -1;
}

// retorno em caso de ordenação Descendente
function descOrder(columnA, columnB) {
  if (columnA < columnB) return 1;
  return -1;
}

// Ordenação alfabetica dos planetas
const sortPlanets = (planetA, planetB, filters) => {
  const { order } = filters;

  let columnA = planetA[order.column.toLowerCase()];
  let columnB = planetB[order.column.toLowerCase()];

  if (order.column.toLowerCase() !== 'name') {
    columnA = Number(columnA);
    columnB = Number(columnB);
  }

  switch (order.sort) {
    case 'ASC':
      return ascOrder(columnA, columnB);
    case 'DESC':
      return descOrder(columnA, columnB);
    default:
      return 0;
  }
};

// Fetch API e renderização da tabela pelo sucesso da requisição da API
const Table = () => {
  const { filters } = useContext(FiltersContext);
  const { isFetching, setIsFetching, data, setData } = useContext(StarWarContext);

  useEffect(() => {
    fetchStarWars()
    .then((getData) => {
      setIsFetching(false);
      setData(getData.results);
    });
  }, []);

  if (isFetching) { return (<span>Loading...</span>); }
  return (
    <div>
      <h1 className="table-title" >StarWars Datatable with Filters</h1>
      <Filters />
      <table>
        <Header />
        <tbody>
          {getFilteredValues(filters, data)
          .sort((planetA, planetB) => sortPlanets(planetA, planetB, filters))
          .map((planet) => (
            <tr key={planet.name}>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films.map((film) => <p key={film}>{film}</p>)}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
