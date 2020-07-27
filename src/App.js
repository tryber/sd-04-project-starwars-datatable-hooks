import React from 'react';
import { SWProvider } from './context/SWContext';

const App = () => (
  <SWProvider>
    <div>Olá</div>
  </SWProvider>
);

export default App;
