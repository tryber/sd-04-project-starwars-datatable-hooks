import React from 'react';
import Landpage from './components/index';
import { StarWarsProvider } from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Landpage />
    </StarWarsProvider>
  );
}
// Código reutilizado do projeto de Redux
export default App;
