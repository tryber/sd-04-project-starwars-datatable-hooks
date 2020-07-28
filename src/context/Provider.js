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
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
      },
    };
    this.fetchPlanets = this.fetchPlanets.bind(this);
    this.handlePlanetsDataSuccess = this.handlePlanetsDataSuccess.bind(this);
    this.handleFilterName = this.handleFilterName.bind(this);
    this.handleFilterNumeric = this.handleFilterNumeric.bind(this);
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

  handleFilterName(inputName) {
    this.setState({
      filters: {
        ...this.state.filters,
        filterByName: {
          name: inputName,
        },
      },
    });
  }

  handleFilterNumeric(obj) {
    this.setState({
      filters: {
        ...this.state.filters,
        filterByNumericValues: [
          ...this.state.filters.filterByNumericValues,
          obj,
        ],
      },
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      getPlanetsData: this.fetchPlanets,
      filterName: this.handleFilterName,
      filterNumeric: this.handleFilterNumeric,
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
