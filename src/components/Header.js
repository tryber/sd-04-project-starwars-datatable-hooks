import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const filterTableByName = (search, setData) => {
  setData((data) => ({ ...data, filterByName: { name: search } }));
};

function Header() {
  const { setData, data } = useContext(StarWarsContext);

  if (data.isLoading) return <p>Loading...</p>;
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={(e) => filterTableByName(e.target.value, setData)}
      />
    </div>
  );
}

export default Header;
