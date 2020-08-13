// import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { AppContext } from '../context';
// import filterAll from './filterAll';
import Colunas from './Colunas';
// import './Table.css';
// import orderFuncAsc from '../components/orderFuncAsc';
// import orderFuncDesc from '../components/OrderFuncDesc';

const filterTableByName = (search, planets) => {
  console.log(search);
  const planetasFiltrados = planets.filter(({ name }) =>
    name.toUpperCase().includes(search.toUpperCase()),
  );
  console.log(planetasFiltrados);
  return planetasFiltrados;
};

const Table = () => {
  const { data } = useContext(AppContext);
  // if (isFetching) return <span>...Loading</span>;
  // const planeta1 = data;
  const {
    planetsData,
    filterByName: { name },
  } = data;

  return (
    <div>
      <table className="tabela">
        <thead>
          <Colunas />
        </thead>
        <tbody>
          {filterTableByName(name, planetsData).map((planeta) => (
            <tr>
              <td>{planeta.name}</td>
              <td>{planeta.rotation_period}</td>
              <td>{planeta.orbital_period}</td>
              <td>{planeta.diameter}</td>
              <td>{planeta.climate}</td>
              <td>{planeta.gravity}</td>
              <td>{planeta.terrain}</td>
              <td>{planeta.surface_water}</td>
              <td>{planeta.population}</td>
              <td>{planeta.films}</td>
              <td>{planeta.created}</td>
              <td>{planeta.edited}</td>
              <td>{planeta.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
/*
Table.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  numericValues: PropTypes.func.isRequired,
  planets: PropTypes.func.isRequired,
  columnSort: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
}; */

export default Table;
