import React, { useContext, useEffect } from 'react';
import PlanetItem from './PlanetItem';
import '../styles/PlanetsTable.css';
import { starContext } from '../context';
import requestFromApi from '../service/starWarsApi';

const operatorHelper = {
  'menor que': (v, c) => parseFloat(v) < parseFloat(c),
  'maior que': (v, c) => parseFloat(v) > parseFloat(c),
  'igual a': (v, c) => parseFloat(v) === parseFloat(c),
};

const filterInfo = (info, nameFilter, numericFilter) => {
  if (nameFilter && !info.name.toLowerCase().includes(nameFilter.toLowerCase())) return false;
  if (numericFilter.length > 0 && !numericFilter.every(
    ({ column, comparison, value }) => operatorHelper[comparison](info[column], value),
  )) return false;
  return true;
};

const orderInfo = (column, { [column.toLowerCase()]: a }, { [column.toLowerCase()]: b }) => {
  if (!isNaN(a) || !isNaN(b)) return parseFloat(a) - parseFloat(b);
  return a.localeCompare(b);
};

const processData = (data, name, filterByNumericValues, order) => {
  const filtered = data.filter((info) => filterInfo(info, name, filterByNumericValues));
  const ordered = filtered.sort((a, b) => orderInfo(order.column, a, b));
  return order.sort === 'ASC' ? ordered : ordered.reverse();
};

const PlanetsTable = () => {
  const {
    data, setData, filterByName: name, filterByNumericValues: numeric, order,
  } = useContext(starContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await requestFromApi();
      setData(response.results);
    };
    fetchData();
  }, [setData]);

  if (data.length < 1) return <div>loading...</div>;
  const keys = Object.keys(data[0]).filter((k) => k !== 'residents');
  const resultingData = processData(data, name, numeric, order);

  return (
    <table className="planets-table">
      <thead>
        <tr>
          {keys.map((k) => <th key={k}>{k.replace('_', ' ')}</th>)}
        </tr>
      </thead>
      <tbody>
        {resultingData.map((planet) => <PlanetItem data={planet} key={planet.name} />)}
      </tbody>
    </table>
  );
};

export default PlanetsTable;
