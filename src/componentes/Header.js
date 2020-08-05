import React, { useContext, useEffect } from 'react';
import getPlanets from '../services/serviceApi';
import { StarWarsContext } from '../context/StarWarsContext';
import DropDown from './DropDown';

function Header() {
  const { setPlanets, setHeaders, filtros, inputText, setFiltros } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data.results);
      setHeaders(Object.keys(data.results[0]));
      setFiltros((e) => ({ ...e, loading: false }));
    });
  }, []);

  return (
    <div>
      <label htmlFor="seachBar">
        <input
          data-testid="name-filter"
          onChange={(e) => inputText(e.target.value)}
          type="text"
          value={filtros.filterByName.name}
          placeholder="pesquisa"
        />
      </label>
      <DropDown />
    </div>
  );
}

export default Header;
