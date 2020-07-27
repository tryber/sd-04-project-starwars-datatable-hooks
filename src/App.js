import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchPlanetsAPI } from './actions';
import './App.css';

import StarWarsContext from './context/StarWarsContext';

import SearchPlanet from './components/SearchPlanet';
import ComparisonFilter from './components/ComparisonFilter';
import Filters from './components/Filters';
import Table from './components/Table';
import OrderFilter from './components/OrderFilter';
import getPlanets from './services/planetsAPI';

const App = () => {
  // componentDidMount() {
  //   const { getPlanets } = this.props;
  //   getPlanets();
  // }

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Deve funcionar como componentDidMount para chamar os planetas
    setData(getPlanets());
    // setIsLoading(true)
  }, []);

  return (
    <StarWarsContext.Provider /* value={} */>
      <div className="App">
      debora
        {/* <header className="App-header">
          <SearchPlanet />
          <OrderFilter />
          <ComparisonFilter />
          <Filters />
        </header>
        <Table /> */}
      </div>
    </StarWarsContext.Provider>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   getPlanets: () => dispatch(fetchPlanetsAPI()),
// });

// export default connect(null, mapDispatchToProps)(App);
export default App;

// App.propTypes = {
//   getPlanets: PropTypes.func.isRequired,
// };
