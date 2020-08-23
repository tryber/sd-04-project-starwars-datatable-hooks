import React, { useContext } from 'react';
import Comparador from './comparador';
import { StarWarsContext } from '../context/StarWarsContext';

const Input = () => {
  const { filterByName, setFilterByName } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="inputText">Texto Contém</label>
      <input
        data-testid="name-filter"
        type="text"
        name="inputText"
        onChange={(event) => setFilterByName(event.target.value)}
      />
      <Comparador />
    </div>
  );
};

export default Input;
