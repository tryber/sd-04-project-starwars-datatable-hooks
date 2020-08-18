import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';
import NameFilter from './NameFilter';

const Header = () => {
  const { filters } =  useContext(StarWarsContext);

  return (
    <div>
      <NameFilter filters={filters} />
    </div>
  );
};

export default Header;
