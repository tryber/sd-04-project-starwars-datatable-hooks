import React, { createContext } from 'react';
import { useState } from 'react';

const SWContext = createContext();

const SWProvider = ({ children }) => {
  const [name, setName] = useState('');

  const getName = (e) => {
    setName(e.target.value);
  };

  const context = {
    name,
    setName,
    getName,
  };

  return <SWContext.Provider value={context}>{children}</SWContext.Provider>;
};

export { SWContext, SWProvider };
