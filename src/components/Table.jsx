import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import TableHeader from '../components/TableHeader';
import InputFilterByName from '../components/InputFilterByName';
import SelectFilter from '../components/SelectFilter';

const Table = () => {
  const { dataFiltered, isLoading } = useContext(StarWarsContext);

  if (isLoading) {
    return <h5 className="progress-bar progress-bar-striped progress-bar-animated">Loading...</h5>;
  }
  return dataFiltered.length > 0 && !isLoading ? (
    <div>
      <InputFilterByName />
      <SelectFilter />
      <table className="table table-bordered table-dark">
        <tbody>
          <TableHeader />
          {dataFiltered.map((planet) => (
            <tr key={planet.name}>
              {Object.values(planet).map((value) => (
                <td data-testid="planet-name" key={value}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <h3 style={{ textAlign: 'center' }}>Planets not found. Try again!</h3>
  );
};

export default Table;
