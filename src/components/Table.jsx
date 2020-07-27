import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import TableHeader from '../components/TableHeader';

const Table = () => {
  const { data, isLoading } = useContext(StarWarsContext);

  if (isLoading) {
    return (
      <h5 className="progress-bar progress-bar-striped progress-bar-animated">
        Loading...
      </h5>
    );
  }

  return (
    <table className="table table-bordered table-dark">
      <tbody>
        {data.length > 0 && <TableHeader />}
        {data.length > 0 &&
          data.map((planet) => (
            <tr key={planet.name}>
              {Object.values(planet).map((value) => (
                <td key={value}>{value}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
