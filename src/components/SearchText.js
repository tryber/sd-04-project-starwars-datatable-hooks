import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const SearchText = () => {
  const { textInput, setTextInput } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="searchText">Procurar:</label>
      <br />
      <input
        type="text"
        value={textInput}
        data-testid="name-filter"
        onChange={(event) => setTextInput(event.target.value)}
      />
    </div>
  );
};

export default SearchText;
