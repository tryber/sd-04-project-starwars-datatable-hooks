import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function filterByNamePlanet(name, setData) {
  setData((data) => ({ ...data, filterByName: { name } }));
} // filterByName: { name: name } onde name é a chave e o
// seg name é o evento passado

const FilterPlanet = () => {
  const { setData } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="digite o planeta"
        onChange={(event) => filterByNamePlanet(event.target.value, setData)}
      />
      <span>Busque o seu planeta queridinho</span>
    </div>
  );
};

FilterPlanet.propTypes = {
  filterByNamePlanet: PropTypes.func.isRequired,
};

export default FilterPlanet;
