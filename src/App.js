import React from 'react';
import { StarWarsProvider } from './context/StarWarsContext';
// import PropTypes from 'prop-types';
import Table from './components/Table';

const App = () => {
  // componentDidMount() {
  //   const { fetchSwPlanets } = this.props;
  //   fetchSwPlanets();
  // }
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
};

// App.propTypes = {
// fetchSwPlanets: PropTypes.func.isRequired,
// isLoading: PropTypes.bool.isRequired,
// };

export default App;
