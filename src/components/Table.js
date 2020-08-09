// import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import getSwapi from '../services/getSwapi';
// import filterAll from './filterAll';
import linhas from './Linhas';
import Colunas from './Colunas';
// import './Table.css';
// import orderFuncAsc from '../components/orderFuncAsc';
// import orderFuncDesc from '../components/OrderFuncDesc';

const Table = (props) => {
  //  const { isFetching, data, planets, name, numericValues, columnSort, sort } = useContext(
  //    AppContext,
  //  );
  const { data, setdata, setIsFetching, isFetching } = useContext(AppContext);

  async function getPlanetsData() {
    const planets = await getSwapi();
    setdata(planets.results);
    setIsFetching(false);
  }

  useEffect(() => {
    getPlanetsData();
  }, []);

  /* 
  const ordemData =
    sort === 'ASC'
      ? orderFuncAsc(planets, name, numericValues, columnSort, sort)
      : orderFuncDesc(planets, name, numericValues, columnSort, sort); */

  if (isFetching) return <span>...Loading</span>;
  //const planeta1 = data;

  return (
    <div>
      {console.log(data)}
      <table className="tabela">
        <thead>
          <Colunas />
        </thead>
        <tbody>{data.map((selectedPlanet) => linhas(selectedPlanet))}</tbody>
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
