import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FilterByNumeric from '../components/filterByNum';

const filterTableByName = (search, setData) => {
  setData((data) => ({ ...data, filterByName: { name: search } }));
};

function Header() {
  const { setData, isLoading } = useContext(StarWarsContext);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={(e) => filterTableByName(e.target.value, setData)}
      />
      <FilterByNumeric />
    </div>
  );
}

export default Header;
