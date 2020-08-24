import React, { useState, useContext }  from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Search() {
  const [text, setText] = useState('');
  const { filter } = useContext(StarWarsContext);

  const onTextChange = (event) => {
    setText(event.target.value);
    filter(event.target.value);
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={text}
        onChange={(event) => onTextChange(event)}
        placeholder="Faça sua pesquisa"
      />
    </div>
  );
}

export default Search;

