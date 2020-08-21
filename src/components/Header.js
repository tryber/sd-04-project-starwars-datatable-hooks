import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/store';
import { renderCompSelect, renderColumnSelect } from '../helper';

const Header = () => {
  const { filterByName: [filterByName, setfilterByName] } = useContext(StarWarsContext);
  const {
    filterByNumericValues: [filterByNumericValues, setfilterByNumericValues],
  } = useContext(StarWarsContext);
  const [comparison, setComparison] = useState('');
  const [column, setColumn] = useState('');
  const [value, setValue] = useState(0);
  const handleSumbit = (event) => {
    event.preventDefault();
    setfilterByNumericValues([...filterByNumericValues, { column, comparison, value }]);
    setComparison('');
    setColumn('');
    setValue(0);
  };
  return (
    <header className="App-header">
      <div>
        <input
          type="text"
          value={filterByName}
          data-testid="name-filter"
          onChange={(event) => setfilterByName(event.target.value)}
        />
      </div>
      <div className="container small">
        <form action="">
          <div className="item">
            {renderColumnSelect(column, filterByNumericValues, setColumn)}
            {renderCompSelect(comparison, setComparison)}
          </div>
          <input
            type="number"
            data-testid="value-filter"
            name="value"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button
            type="button"
            value="Filtrar"
            data-testid="button-filter"
            onClick={(event) => handleSumbit(event)}
          >
            Filter
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
