import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const numberColumns = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

const filterDataByName = (data, filter) => {
  const pattern = new RegExp(`.*${filter}.*`, 'gim');
  console.log('data', data);
  return data.filter((result) => result.name.match(pattern));
};

const filterByNumber = (numbersFilter, data) => {
  let newData = [...data];
  const operations = {
    'maior que': (a, b) => Number(a) > Number(b),
    'menor que': (a, b) => Number(a) < Number(b),
    'igual a': (a, b) => a === b,
  };
  if (numbersFilter.length > 0) {
    for (let i = 0; i < numbersFilter.length; i += 1) {
      const columnFilter = numbersFilter[i].column;
      const comparisonFilter = numbersFilter[i].comparison;
      const valueFilter = numbersFilter[i].value;
      newData = newData.filter((element) =>
        operations[comparisonFilter](element[columnFilter], valueFilter),
      );
    }
    return newData;
  }
  return data;
};

const sortAcending = (A, B) => {
  if (A < B) {
    return -1;
  }
  return 1;
};

const sortDecending = (A, B) => {
  if (A < B) {
    return 1;
  }
  return -1;
};

const checkData = (a, column) => {
  const data = numberColumns.some((elem) => elem === column)
    ? Number(a[column])
    : a[column.toLowerCase()].toUpperCase();
  return data;
};

const sortData = (data, column, sortWay) => {
  const sortedData = data.sort((a, b) => {
    const A = checkData(a, column);
    const B = checkData(b, column);
    if (sortWay === 'ASC') {
      return sortAcending(A, B);
    }
    if (sortWay === 'DESC') {
      return sortDecending(A, B);
    }
    return 0;
  });
  return sortedData;
};

const Table = () => {
  const {
    data: {
      results: { results, setResults },
      next: { setNext },
      previous: { setPrevious },
      count: { setCount },
      getData,
    },
    filters: {
      filterByName: { filterByName },
      filterByNumericValues: { filterByNumericValues },
      order: {
        column: { column },
        sort: { sort },
      },
    },
  } = useContext(StarWarsContext);

  useEffect(() => {
    getData('planets').then((data) => {
      setCount(data.count);
      setNext(data.next);
      setPrevious(data.previous);
      setResults(data.results);
    });
  }, []);

  const getHeaders = () => {
    const headerKeys = Object.keys(results[0]);
    return (
      <tr>
        {headerKeys.map((k) => {
          if (k !== 'residents') {
            return <th key={k}>{k}</th>;
          }
          return null;
        })}
      </tr>
    );
  };

  const getBody = () => (
    <tbody>
      {sortData(
        filterDataByName(
          filterByNumber(filterByNumericValues, results),
          filterByName,
        ),
        column,
        sort,
      ).map((element) => (
        <tr key={element.name}>
          {Object.values(element).map((d, i) => (
            <td
              data-testid={i === 0 ? 'planet-name' : 'info'}
              key={`${element.name}-${d}`}
            >
              {d}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  if (results) {
    return (
      <table>
        <thead>{getHeaders()}</thead>
        {getBody()}
      </table>
    );
  }
  return <div>...em uma galáxia muito distante</div>;
};

export default Table;
