import React, { useContext } from 'react';
import { AppContext } from '../context/index';
import FilterByNumeric from '../components/filterByNumeric';
import RadioSort from './RadioSort';

const filterTableByName = (search, set) => {
  set((data) => ({ ...data, filterByName: { name: search } }));
};

const Header = () => {
  const { setData, data } = useContext(AppContext);

  if (data.isFetching) return <p>Loading ...</p>;

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={(e) => filterTableByName(e.target.value, setData)}
      />
      <FilterByNumeric />
      <RadioSort />
    </div>
  );
};

export default Header;
