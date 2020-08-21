import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../../context/store';
import { renderCompSelect, renderColumnSelect } from '../../helper';

const NumFilter = () => {
  const {
    filterByNumericValues: [filterByNumericValues, setfilterByNumericValues],
  } = useContext(StarWarsContext);
  const [comparison, setComparison] = useState('');
  const [column, setColumn] = useState('');
  const [value, setValue] = useState(0);
  const handleSumbit = (event) => {
    event.preventDefault();
    setfilterByNumericValues([...filterByNumericValues, { column, comparison, value }]);
    setColumn(''); setValue(0); setComparison('');
  };
  return (
    <React.Fragment>
      <form action="" className="container small">
        <div className="item">
          {renderColumnSelect(column, filterByNumericValues, setColumn)}
          {renderCompSelect(comparison, setComparison)}
        </div>
        <input
          type="number"
          data-testid="value-filter"
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
    </React.Fragment>
  );
};

export default NumFilter;
