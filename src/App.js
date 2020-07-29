import React from 'react';
import './App.css';
import { StarWarsProvider } from './context/StarWarsContext'; // sei que vou precisar
import Table from './components/Table'; // sei que vou precisar

const App = () => (
  <StarWarsProvider>
    <Table />
  </StarWarsProvider>
);

// estrutura básica do Provider

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
