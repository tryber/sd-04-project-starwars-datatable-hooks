import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';


const StarWarsProvider = ({ children }) => {
  // fn prover estados para qq comp.

  // 2 - useStates:
  const [data, setData] = useState([]); // inicialm. array result está vazio.
  const [isLoading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [valueSelect, setValueSelect] = useState({});
  const [filterByNumericValues, setFilterNumeric] = useState([]);

  // 1- fazendo requisição:
  const planets = 'https://swapi-trybe.herokuapp.com/api/planets/';

  /* criar effeitos acontecerá apenas uma vez pq 2º parm é um array vazio
  e por isso tem o comportamento de compdidMount (chamado depois comp é montado) */
  useEffect(() => {
    (async () => {
      try {
        const caller = await fetch(planets); // fazendo requisiçao
        const Json = await caller.json(); // espera fazer requisiçao e esp. retornar obj json
        const { results } = await Json; // pego somente o array results
        await setData(results); // passo para o estado data o valor results
        await setLoading(false);
      } catch (error) {
        console.log('Requisição rejeitada', error);
      }
    })();
  }, []);

  // atualizar nome planetque o user digita
  const getAndSetName = (nameUser) => {
    setName(nameUser);
  };

  // fn para salvar os valores que o user selected e input
  const handleChange = (event) => {
    const { value, name } = event.target;
    event.preventDefault(); // impede que a  carregue de forma recorrente
    setValueSelect((prevState) => ( // recebe o estado anterior como param
      // e retorna o estado q é um obj
      {
        ...prevState,
        [name]: value,
      }
    ));
  };

  const onClick = (event) => {
    event.preventDefault();
    setFilterNumeric((prevState) => ([
      ...prevState,
      valueSelect,
    ]));
  };


  // guardar os estados, métodos, fn, para serem consumidos
  const context = {
    data,
    isLoading,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues,
    },
    getAndSetName,
    handleChange,
    onClick,
  };

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

export default StarWarsProvider;


StarWarsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
