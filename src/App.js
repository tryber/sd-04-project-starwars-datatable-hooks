import React from 'react';
import Home from './components/Home';
import StarWarsProvider from './context/StarwarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Home />
    </StarWarsProvider>
  );
}

export default App;
