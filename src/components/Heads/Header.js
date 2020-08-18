import React from 'react';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';

const Header = () => (
  <div>
    <NameFilter />
    <br />
    <NumericFilter />
    <br />
  </div>
);

export default Header;
