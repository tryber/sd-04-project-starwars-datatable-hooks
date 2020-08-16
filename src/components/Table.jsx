// import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { AppContext } from '../context';
import linhas from '../components/Linhas';
// import filterAll from './filterAll';
import Colunas from './Colunas';
import funcFilterByNumericValues from '../functions/funcFilterByNumericValues';
// import './Table.css';
// import orderFuncAsc from '../components/orderFuncAsc';
// import orderFuncDesc from '../components/OrderFuncDesc';

const filterTableByName = (search, planets) => {
  const planetasFiltrados = planets.filter(({ name }) =>
    name.toUpperCase().includes(search.toUpperCase()),
  );
  return planetasFiltrados;
};

const Table = () => {
  const { data } = useContext(AppContext);
  // if (isFetching) return <span>...Loading</span>;
  // const planeta1 = data;
  const {
    planetsData,
    filterByName: { name },
    filterByNumericValues,
  } = data;

  const filteredByNumericValues = funcFilterByNumericValues(
    planetsData,
    name,
    filterByNumericValues,
  );
  return (
    <div>
      <table className="tabela">
        <thead>
          <Colunas />
        </thead>
        <tbody>{filteredByNumericValues.map((planeta) => linhas(planeta))}</tbody>
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
