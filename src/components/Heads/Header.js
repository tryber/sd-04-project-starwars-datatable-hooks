import React from 'react';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';
import PutFilters from './PutFilters';

const Header = () => (
  <div>
    <NameFilter />
    <br />
    <NumericFilter />
    <br />
    <PutFilters />
  </div>
);

export default Header;
