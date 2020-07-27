import React, { useState, useContext } from 'react';
import { starWarsContext } from '../context/starWarsContext';

const FilterName = () => {
  const {}
  return (
    <input
      data-testid="name-filter"
      type="text"
      value=''
      onChange={(e) => e.target.value}
    />
  );
};
