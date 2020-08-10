// import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import getSwapi from '../services/getSwapi';
// import filterAll from './filterAll';
import linhas from './Linhas';
import Colunas from './Colunas';
import Header from './Header';
// import './Table.css';
// import orderFuncAsc from '../components/orderFuncAsc';
// import orderFuncDesc from '../components/OrderFuncDesc';

const Table = ({planets}) => {

  const { data, setData, setIsFetching, isFetching } = useContext(AppContext);
  //if (isFetching) return <span>...Loading</span>;
  // const planeta1 = data;
  const { filteredPlanets } = data;
  console.log(filteredPlanets)

  return (
    <div>
      <table className="tabela">
        <thead>
          <Colunas />
        </thead>
        <tbody>{filteredPlanets.map((selectedPlanet) => linhas(selectedPlanet))}</tbody>
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
