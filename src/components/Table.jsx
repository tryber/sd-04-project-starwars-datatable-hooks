import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import useFetch from '../hooks/useFetch';
import useFilter from '../hooks/useFilter';
import './Table.css';

const Table = () => {
  const [store] = useContext(StarWarsContext);
  const request = useFetch();
  const filtered = useFilter(store.apiRequest.data);

  useEffect(() => {
    request('https://swapi.dev/api/planets');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (store.apiRequest.error) return <h1>{store.apiRequest.error}</h1>;
  if (store.apiRequest.loading) return <h1>Loading</h1>;
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {store.apiRequest.headers.map((planetKey) => (
              <th key={planetKey}>{planetKey}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filtered.map((planet) => (
            <tr key={`${planet.name}${planet.rotation_period}`}>
              {store.apiRequest.headers.map((planetKey) => {
                if (planetKey === 'name') {
                  return (
                    <td
                      key={`${planet.name}${planet[planetKey]}`}
                      data-testid="planet-name"
                    >
                      {planet[planetKey]}
                    </td>
                  );
                } else {
                  return (
                    <td key={`${planet.name}${planet[planetKey]}`}>
                      {planet[planetKey]}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
