import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import { fetchPlanets } from './actions';
import Filter from './components/Filter';
import FiltersPanel from './components/FiltersPanel';

class App extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    return (
      <StarWarsProvider>
        <div>
          <header>
            <SearchBar />
            <Filter />
            <FiltersPanel />
          </header>
          <section>
            <Table />
          </section>
        </div>
      </StarWarsProvider>
    );
  }
}

App.propTypes = {
  getPlanets: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

export default connect(null, mapDispatchToProps)(App);
