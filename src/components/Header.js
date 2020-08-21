import React, { useContext } from 'react';
import { StarWarsContext } from '../context/store';

const Header = () => {
  const { filterByName: [filterByName, setfilterByName] } = useContext(StarWarsContext);
  return (
    <header className="App-header">
      <div className="item">
        <input
          type="text"
          value={filterByName}
          data-testid="name-filter"
          onChange={(event) => setfilterByName(event.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;
