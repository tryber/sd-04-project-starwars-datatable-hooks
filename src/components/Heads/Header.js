import React from 'react';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';
import PutFilters from './PutFilters';
import OrderFilter from './OrderFilter';

const Header = () => (
  <div>
    <NameFilter />
    <br />
    <NumericFilter />
    <br />
    <OrderFilter />
    <br />
    <PutFilters />
  </div>
);

export default Header;
