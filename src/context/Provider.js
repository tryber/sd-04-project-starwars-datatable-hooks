import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanetsData from '../services/StarWarsAPI';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: [],
    };
    this.fetchPlanets = this.fetchPlanets.bind(this);
    this.handlePlanetsDataSuccess = this.handlePlanetsDataSuccess.bind(this);
  }

  fetchPlanets() {
    const { isFetching } = this.state;

    if (isFetching) return;

    this.setState({ isFetching: true });

    getPlanetsData().then(this.handlePlanetsDataSuccess);
  }

  handlePlanetsDataSuccess(json) {
    this.setState({
      isFetching: false,
      data: json.results,
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      getPlanetsData: this.fetchPlanets,
    };

    const { children } = this.props;

    return (
      <StarWarsContext.Provider value={contextValue}>
        {children}
      </StarWarsContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
