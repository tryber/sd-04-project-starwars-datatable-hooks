import React, { useContext } from 'react';
import { StarWarsContext } from '../context/store';
import { renderRemoveBtn } from '../helper';
import NumFilter from './Header/NumFilter';
import SortItems from './Header/SortItems';

const Header = () => {
  const { filterByName: [filterByName, setfilterByName] } = useContext(StarWarsContext);
  const {
    filterByNumericValues: [filterByNumericValues, setfilterByNumericValues],
  } = useContext(StarWarsContext);
  return (
    <header className="App-header">
      <div className="container small">
        <input
          type="text"
          value={filterByName}
          data-testid="name-filter"
          onChange={(event) => setfilterByName(event.target.value)}
        />
      </div>
      <div className="container small">
        <SortItems />
        <NumFilter />
      </div>
      <div className="container-small">
        {renderRemoveBtn(filterByNumericValues, setfilterByNumericValues)}
      </div>
    </header>
  );
};

export default Header;
