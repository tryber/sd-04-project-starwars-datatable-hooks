import React, { useContext } from 'react';
import { StarWarsContext } from '../context';
import setFilterByName from '../services/setFilterByName';
import RenderFilterDropdown from '../components/RenderFilterDropdown';
import RenderFiltersSetted from '../components/RenderFiltersSetted';

export default function Header() {
  const { data, setData } = useContext(StarWarsContext);

  const { isFetching, planetsData } = data;

  if (isFetching) return <p>Loading...</p>;
  return (
    <div>
      <h4>Procurar:</h4>
      <input
        data-testid="name-filter"
        type="text"
        onChange={(e) => {
          setFilterByName(e.target.value, planetsData, setData, data);
        }}
      />
      {/* <RenderFiltersOrder /> */}
      <RenderFilterDropdown />
      <RenderFiltersSetted />
    </div>
  );
}
