import React from 'react';
import PropTypes from 'prop-types';

import Table from './components/Table';

class App extends React.Component {
  // componentDidMount() {
  //   const { fetchSwPlanets } = this.props;
  //   fetchSwPlanets();
  // }

  render() {
    return (
      <div>
        <Table />
      </div>
    );
  }
}

App.propTypes = {
  fetchSwPlanets: PropTypes.func.isRequired,
  // isLoading: PropTypes.bool.isRequired,
};

export default App;
