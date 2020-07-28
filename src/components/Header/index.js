import React, { useContext } from 'react';
import NumericFilter from './NumericFilter';
import FiltersList from './FiltersList';
import OrderFilter from './OrderFilter';
import { starContext } from '../../context';

export const Header = () => {
  const { setFilterByName } = useContext(starContext);
  return (
    <div>
      <input
        type="text"
        name="name-filter"
        placeholder="Pesquisar"
        onChange={(e) => setFilterByName(e.target.value)}
        data-testid="name-filter"
      />
      <NumericFilter />
      <OrderFilter />
      <FiltersList />
    </div>
  );
};

export default Header;
