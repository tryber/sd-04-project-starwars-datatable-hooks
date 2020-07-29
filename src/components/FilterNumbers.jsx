import React, { useState } from 'react';
import FilterColumn from './FilterColumn';
import FilterComparison from './FilterComparison';
import FilterNumber from './FilterNumber';
import FilterNumberBtn from './FilterNumberBtn';

const FilterNumbers = () => {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  return (
    <div className="filter-numbers-container">
      <h3 className="caption">Filter by numbers</h3>
      <div className="filter-numbers-inputs">
        <FilterColumn
          onChange={(event) => setColumn(event.target.value)}
          value={column}
        />
        <FilterComparison
          onChange={(event) => setComparison(event.target.value)}
          value={comparison}
        />
        <FilterNumber
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
      </div>
      <FilterNumberBtn
        state={{ column, comparison, value }}
        clearColumnState={() => setColumn('')}
      />
    </div>
  );
};

export default FilterNumbers;
