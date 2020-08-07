import React from 'react';
import StoreContext from './utils/store';
import './css/App.css';
import './css/header.css';
import Table from './components/Table';
import Filters from './components/Filters';
import ShowFilters from './components/ShowFilters';
import headerImg from './images/star-wars.png';


const App = () =>
  <StoreContext>
    <div >
      <div>
        <img src={headerImg} alt="Imagem de cabelhaço da tabela de dados" width="100%" />
        <div className="filters-container">
          <Filters />
          <ShowFilters />
        </div>
      </div>
      <Table />
    </div>;
  </StoreContext>;

export default App;
