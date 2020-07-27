import React, { createContext, useState } from 'react';

const SWContext = createContext();

const SWProvider = ({ children }) => {

  const [nome, setNome] = useState();

  const context = {};

  return (
    <SWContext.Provider value={context}>{children}</SWContext.Provider>
  );
};

export { SWContext, SWProvider };
