import React, { createContext } from 'react';

const SWContext = createContext();

const SWProvider = ({ children }) => {
  const context = {};

  return <SWContext.Provider value={context}>{children}</SWContext.Provider>;
};

export { SWContext, SWProvider };
